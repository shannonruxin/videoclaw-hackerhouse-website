import { motion } from "framer-motion";

type Pixel = { x: number; y: number; tone: "cyan" | "magenta" | "violet" };
type MotifType = "flower" | "star" | "diamond" | "plus";

const motifs: Record<MotifType, Pixel[]> = {
  flower: [
    { x: 0, y: 0, tone: "cyan" },
    { x: 0, y: -1, tone: "cyan" },
    { x: 0, y: 1, tone: "cyan" },
    { x: -1, y: 0, tone: "cyan" },
    { x: 1, y: 0, tone: "cyan" },
    { x: -2, y: -2, tone: "magenta" },
    { x: 2, y: -2, tone: "magenta" },
    { x: -2, y: 2, tone: "magenta" },
    { x: 2, y: 2, tone: "magenta" },
    { x: 0, y: -3, tone: "violet" },
    { x: -3, y: 0, tone: "violet" },
    { x: 3, y: 0, tone: "violet" },
    { x: 0, y: 3, tone: "violet" },
  ],
  star: [
    { x: 0, y: 0, tone: "cyan" },
    { x: 0, y: -1, tone: "cyan" },
    { x: 0, y: -2, tone: "magenta" },
    { x: 0, y: 1, tone: "cyan" },
    { x: 0, y: 2, tone: "magenta" },
    { x: -1, y: 0, tone: "cyan" },
    { x: -2, y: 0, tone: "magenta" },
    { x: 1, y: 0, tone: "cyan" },
    { x: 2, y: 0, tone: "magenta" },
    { x: -1, y: -1, tone: "violet" },
    { x: 1, y: -1, tone: "violet" },
    { x: -1, y: 1, tone: "violet" },
    { x: 1, y: 1, tone: "violet" },
  ],
  diamond: [
    { x: 0, y: -2, tone: "magenta" },
    { x: -1, y: -1, tone: "cyan" },
    { x: 0, y: -1, tone: "violet" },
    { x: 1, y: -1, tone: "cyan" },
    { x: -2, y: 0, tone: "magenta" },
    { x: -1, y: 0, tone: "cyan" },
    { x: 0, y: 0, tone: "violet" },
    { x: 1, y: 0, tone: "cyan" },
    { x: 2, y: 0, tone: "magenta" },
    { x: -1, y: 1, tone: "cyan" },
    { x: 0, y: 1, tone: "violet" },
    { x: 1, y: 1, tone: "cyan" },
    { x: 0, y: 2, tone: "magenta" },
  ],
  plus: [
    { x: 0, y: -2, tone: "magenta" },
    { x: 0, y: -1, tone: "cyan" },
    { x: -2, y: 0, tone: "magenta" },
    { x: -1, y: 0, tone: "cyan" },
    { x: 0, y: 0, tone: "violet" },
    { x: 1, y: 0, tone: "cyan" },
    { x: 2, y: 0, tone: "magenta" },
    { x: 0, y: 1, tone: "cyan" },
    { x: 0, y: 2, tone: "magenta" },
  ],
};

const motifInstances: Array<{
  type: MotifType;
  scale: number;
  delay: number;
  orbitRadius: number;
  startAngle: number;
  swirlDuration: number;
  clockwise: boolean;
}> = [
  { type: "flower", scale: 1, delay: 0.1, orbitRadius: 250, startAngle: 0, swirlDuration: 40, clockwise: true },
  { type: "star", scale: 0.9, delay: 0.35, orbitRadius: 280, startAngle: 40, swirlDuration: 46, clockwise: false },
  { type: "diamond", scale: 1.1, delay: 0.2, orbitRadius: 300, startAngle: 95, swirlDuration: 44, clockwise: true },
  { type: "plus", scale: 0.85, delay: 0.5, orbitRadius: 335, startAngle: 145, swirlDuration: 52, clockwise: false },
  { type: "flower", scale: 1.2, delay: 0.25, orbitRadius: 365, startAngle: 210, swirlDuration: 58, clockwise: true },
  { type: "star", scale: 1.05, delay: 0.75, orbitRadius: 390, startAngle: 265, swirlDuration: 60, clockwise: false },
  { type: "diamond", scale: 0.95, delay: 0.9, orbitRadius: 420, startAngle: 315, swirlDuration: 66, clockwise: true },
  { type: "plus", scale: 0.8, delay: 0.6, orbitRadius: 455, startAngle: 20, swirlDuration: 72, clockwise: false },
  { type: "flower", scale: 0.9, delay: 0.15, orbitRadius: 500, startAngle: 72, swirlDuration: 76, clockwise: true },
  { type: "flower", scale: 1, delay: 0.45, orbitRadius: 540, startAngle: 168, swirlDuration: 82, clockwise: false },
  { type: "flower", scale: 0.85, delay: 0.7, orbitRadius: 575, startAngle: 248, swirlDuration: 88, clockwise: true },
  { type: "flower", scale: 1.05, delay: 1, orbitRadius: 620, startAngle: 332, swirlDuration: 94, clockwise: false },
  { type: "flower", scale: 0.7, delay: 0.05, orbitRadius: 520, startAngle: 12, swirlDuration: 78, clockwise: true },
  { type: "flower", scale: 1.05, delay: 0.25, orbitRadius: 560, startAngle: 38, swirlDuration: 84, clockwise: false },
  { type: "flower", scale: 0.78, delay: 0.4, orbitRadius: 600, startAngle: 64, swirlDuration: 90, clockwise: true },
  { type: "flower", scale: 1.02, delay: 0.6, orbitRadius: 640, startAngle: 90, swirlDuration: 96, clockwise: false },
  { type: "flower", scale: 0.68, delay: 0.8, orbitRadius: 540, startAngle: 116, swirlDuration: 80, clockwise: true },
  { type: "flower", scale: 15, delay: 1.05, orbitRadius: 585, startAngle: 142, swirlDuration: 92, clockwise: false },
  { type: "flower", scale: 0.82, delay: 0.18, orbitRadius: 625, startAngle: 190, swirlDuration: 98, clockwise: true },
  { type: "flower", scale: 0.98, delay: 0.33, orbitRadius: 665, startAngle: 214, swirlDuration: 104, clockwise: false },
  { type: "flower", scale: 0.74, delay: 0.5, orbitRadius: 545, startAngle: 238, swirlDuration: 82, clockwise: true },
  { type: "flower", scale: 15, delay: 0.72, orbitRadius: 590, startAngle: 262, swirlDuration: 88, clockwise: false },
  { type: "flower", scale: 0.64, delay: 0.92, orbitRadius: 630, startAngle: 286, swirlDuration: 95, clockwise: true },
  { type: "flower", scale: 15, delay: 1.12, orbitRadius: 675, startAngle: 310, swirlDuration: 108, clockwise: false },
  { type: "flower", scale: 0.86, delay: 0.28, orbitRadius: 560, startAngle: 334, swirlDuration: 86, clockwise: true },
  { type: "flower", scale: 1.03, delay: 0.56, orbitRadius: 605, startAngle: 356, swirlDuration: 92, clockwise: false },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -inset-[20%] opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, hsl(var(--neon-cyan) / 0.2), transparent 40%), radial-gradient(circle at 78% 68%, hsl(var(--neon-magenta) / 0.18), transparent 42%), radial-gradient(circle at 52% 42%, hsl(var(--neon-violet) / 0.15), transparent 50%)",
          }}
          animate={{ scale: [1, 1.05, 1], x: [0, -20, 0], y: [0, 16, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-background/82" />
        <motion.div
          className="absolute inset-0 bg-grid opacity-15"
          animate={{ backgroundPosition: ["0px 0px", "24px 24px", "0px 0px"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Pixel motif field */}
      <div className="absolute inset-0 pointer-events-none">
        {motifInstances.map((instance, motifIndex) => {
          const shape = motifs[instance.type];
          return (
            <motion.div
              key={`${instance.type}-${motifIndex}`}
              className="absolute left-1/2 top-1/2"
              style={{ rotate: `${instance.startAngle}deg` }}
              animate={{ rotate: instance.clockwise ? [instance.startAngle, instance.startAngle + 360] : [instance.startAngle, instance.startAngle - 360] }}
              transition={{ duration: instance.swirlDuration, repeat: Infinity, ease: "linear" }}
            >
              <div style={{ transform: `translateX(${instance.orbitRadius}px)` }}>
              {shape.map((pixel, i) => {
                const nextPixel = shape[(i + 1) % shape.length];
                const prevPixel = shape[(i - 1 + shape.length) % shape.length];
                const shiftToNextX = (nextPixel.x - pixel.x) * 8 * instance.scale;
                const shiftToNextY = (nextPixel.y - pixel.y) * 8 * instance.scale;
                const shiftToPrevX = (prevPixel.x - pixel.x) * 8 * instance.scale;
                const shiftToPrevY = (prevPixel.y - pixel.y) * 8 * instance.scale;
                const colorClass =
                  pixel.tone === "cyan"
                    ? "bg-neon-cyan/85"
                    : pixel.tone === "magenta"
                      ? "bg-neon-magenta/80"
                      : "bg-neon-violet/75";

                return (
                  <motion.span
                    key={`${instance.type}-${motifIndex}-${i}`}
                    className={`absolute rounded-[2px] ${colorClass}`}
                    style={{
                      left: pixel.x * 8 * instance.scale,
                      top: pixel.y * 8 * instance.scale,
                      width: 5 * instance.scale,
                      height: 5 * instance.scale,
                    }}
                    animate={{
                      x: [0, shiftToNextX, 0, shiftToPrevX, 0],
                      y: [0, shiftToNextY, 0, shiftToPrevY, 0],
                      opacity: [0.5, 0.95, 0.65, 0.9, 0.5],
                      scale: [0.9, 1.08, 0.92, 1.04, 0.9],
                    }}
                    transition={{
                      duration: 6.8 + (i % 4) * 0.7,
                      times: [0, 0.24, 0.5, 0.76, 1],
                      delay: instance.delay + i * 0.03,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
              </div>
            </motion.div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-neon-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6">
            April 10–12, 2026 · Kuala Lumpur
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-foreground">Video</span>
          <span className="text-gradient-neon">Claw</span>
          <br />
          <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-light">
            Hackerhouse
          </span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          3 days at a villa. Build the next creative tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-cyan hover:scale-105 transition-transform duration-300"
          >
            Apply Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
