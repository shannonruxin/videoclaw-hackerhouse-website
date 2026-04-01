import { useEffect, useRef, useCallback } from "react";

interface Particle {
  bx: number;
  by: number;
  bz: number;
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  size: number;
  baseSize: number;
  h: number;
  s: number;
  l: number;
  opacity: number;
  phase: number;
  speed: number;
}

const PALETTE = [
  { h: 14, s: 90, l: 55 },
  { h: 340, s: 80, l: 55 },
  { h: 260, s: 60, l: 55 },
  { h: 24, s: 95, l: 58 },
  { h: 14, s: 85, l: 68 },
  { h: 350, s: 75, l: 62 },
];

function rotateY(x: number, z: number, a: number) {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return { x: x * cos - z * sin, z: x * sin + z * cos };
}

function rotateX(y: number, z: number, a: number) {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return { y: y * cos - z * sin, z: y * sin + z * cos };
}

function createFlower3D(scale: number): Particle[] {
  const particles: Particle[] = [];
  const k = 5;

  const layers = [
    { count: 280, rScale: 1.0, zPeak: 0.35, sizeRange: [1.8, 4.5], lBoost: 0 },
    { count: 200, rScale: 0.72, zPeak: 0.5, sizeRange: [1.2, 3.5], lBoost: 5 },
    { count: 140, rScale: 0.45, zPeak: 0.65, sizeRange: [1, 3], lBoost: 10 },
    { count: 80, rScale: 0.2, zPeak: 0.8, sizeRange: [1.5, 3], lBoost: 15 },
  ];

  for (const layer of layers) {
    for (let i = 0; i < layer.count; i++) {
      const theta = (Math.PI * 2 * i) / layer.count + Math.random() * 0.4;
      const rose = Math.abs(Math.cos((k * theta) / 2));
      let r = rose * layer.rScale * scale;
      r += (Math.random() - 0.5) * scale * 0.06;
      const rNorm = r / (layer.rScale * scale + 0.001);

      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z =
        Math.sin(rNorm * Math.PI) * layer.zPeak * scale * 0.5 +
        (Math.random() - 0.5) * scale * 0.04;

      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const [minS, maxS] = layer.sizeRange;

      particles.push({
        bx: x,
        by: y,
        bz: z,
        x,
        y,
        z,
        sx: 0,
        sy: 0,
        size: 0,
        baseSize: minS + Math.random() * (maxS - minS),
        h: c.h,
        s: c.s,
        l: Math.min(80, c.l + layer.lBoost),
        opacity: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.6,
      });
    }
  }

  for (let i = 0; i < 70; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * scale * 0.12;
    const c = PALETTE[Math.floor(Math.random() * 2)];
    particles.push({
      bx: r * Math.cos(a),
      by: r * Math.sin(a),
      bz: scale * 0.3 + Math.random() * scale * 0.12,
      x: 0, y: 0, z: 0, sx: 0, sy: 0, size: 0,
      baseSize: 1.5 + Math.random() * 2.5,
      h: c.h, s: c.s, l: 70,
      opacity: 0.4 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.5,
    });
  }

  return particles;
}

const ParticleFlower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const rotation = useRef({ ry: 0, rx: 0 });
  const raf = useRef(0);
  const time = useRef(0);
  const dims = useRef({ w: 0, h: 0, cx: 0, cy: 0, scale: 0 });

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const maxContainer = 1280;
    const containerW = Math.min(rect.width, maxContainer);
    const containerLeft = (rect.width - containerW) / 2;
    const flowerCx = containerLeft + containerW * 0.75;

    const scale = Math.min(rect.width, rect.height) * 0.32;
    dims.current = {
      w: rect.width,
      h: rect.height,
      cx: flowerCx,
      cy: rect.height * 0.46,
      scale,
    };
    particles.current = createFlower3D(scale);
  }, []);

  useEffect(() => {
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [init]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FOV = 600;
    const REPULSE_R = 100;
    const REPULSE_STR = 45;

    const draw = () => {
      time.current += 0.008;
      const dpr = window.devicePixelRatio;
      const { w, h, cx, cy } = dims.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const targetRY = (mouse.current.x - 0.5) * 0.8 + time.current * 0.15;
      const targetRX = (mouse.current.y - 0.5) * -0.4 + 0.3;
      rotation.current.ry += (targetRY - rotation.current.ry) * 0.03;
      rotation.current.rx += (targetRX - rotation.current.rx) * 0.03;

      const ry = rotation.current.ry;
      const rx = rotation.current.rx;

      const mx = mouse.current.x * w;
      const my = mouse.current.y * h;

      for (const p of particles.current) {
        const breath = Math.sin(time.current * p.speed * 2 + p.phase) * 2;
        let px = p.bx + breath * 0.5;
        let py = p.by + breath * 0.3;
        let pz = p.bz + breath * 0.4;

        const r1 = rotateY(px, pz, ry);
        px = r1.x;
        pz = r1.z;
        const r2 = rotateX(py, pz, rx);
        py = r2.y;
        pz = r2.z;

        const perspective = FOV / (FOV + pz);
        let sx = cx + px * perspective;
        let sy = cy + py * perspective;

        const dx = sx - mx;
        const dy = sy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPULSE_R && dist > 0) {
          const force = ((REPULSE_R - dist) / REPULSE_R) * REPULSE_STR;
          sx += (dx / dist) * force;
          sy += (dy / dist) * force;
        }

        p.sx += (sx - p.sx) * 0.12;
        p.sy += (sy - p.sy) * 0.12;
        p.size = p.baseSize * perspective;
        p.x = px;
        p.y = py;
        p.z = pz;
      }

      const sorted = [...particles.current].sort((a, b) => a.z - b.z);

      for (const p of sorted) {
        const depthNorm = (p.z + dims.current.scale) / (dims.current.scale * 2);
        const depthFade = 0.35 + depthNorm * 0.65;
        const pulse = 0.7 + 0.3 * Math.sin(time.current * p.speed * 2 + p.phase);
        const alpha = p.opacity * depthFade * pulse;

        const lightness = p.l - (1 - depthNorm) * 12;

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.h}, ${p.s}%, ${lightness}%, ${alpha})`;
        ctx.fill();

        if (p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.h}, ${p.s}%, ${lightness + 8}%, ${alpha * 0.1})`;
          ctx.fill();
        }
      }

      ctx.restore();
      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
};

export default ParticleFlower;
