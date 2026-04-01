import { motion } from "framer-motion";
import builderImg from "@/assets/builder-card.jpg";
import creativeImg from "@/assets/creative-card.jpg";

const tracks = [
  {
    title: "Builder",
    image: builderImg,
    color: "cyan" as const,
    points: [
      "Build creative tools, workflows, or wrappers using OpenClaw + Humeo",
      "Full creative freedom — solo or in teams",
      "Sponsored credits + building costs covered",
    ],
  },
  {
    title: "Creative",
    image: creativeImg,
    color: "magenta" as const,
    points: [
      "No coding required — bring ideas, taste, and creative direction",
      "Work alongside 10+ tech builders to realize your vision",
      "5 creatives selected — limited spots",
    ],
  },
];

const colorMap = {
  cyan: {
    border: "border-neon-cyan/30",
    glow: "glow-cyan",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/5",
    dot: "bg-neon-cyan",
  },
  magenta: {
    border: "border-neon-magenta/30",
    glow: "glow-magenta",
    text: "text-neon-magenta",
    bg: "bg-neon-magenta/5",
    dot: "bg-neon-magenta",
  },
};

const Tracks = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-3">Two Paths</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Choose Your Track</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, i) => {
            const c = colorMap[track.color];
            return (
              <motion.div
                key={track.title}
                className={`group relative rounded-2xl overflow-hidden border ${c.border} ${c.bg} hover:${c.glow} transition-shadow duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <h3 className={`absolute bottom-6 left-6 text-3xl font-bold ${c.text}`}>
                    {track.title}
                  </h3>
                </div>

                <div className="p-6 pt-2 space-y-3">
                  {track.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                      <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
