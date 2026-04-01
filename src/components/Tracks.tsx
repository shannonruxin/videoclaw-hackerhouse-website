import { motion } from "framer-motion";
import builderImg from "@/assets/builder-card.jpg";
import creativeImg from "@/assets/creative-card.jpg";

const tracks = [
  {
    title: "Builder",
    subtitle: "Code it into existence",
    image: builderImg,
    color: "from-primary/20 to-primary/5",
    badge: "10+ spots",
    points: [
      "Build creative tools, workflows, or wrappers using OpenClaw + Humeo",
      "Full creative freedom — solo or in teams",
      "Sponsored credits + building costs covered",
    ],
  },
  {
    title: "Creative",
    subtitle: "Dream it. Direct it.",
    image: creativeImg,
    color: "from-accent/20 to-accent/5",
    badge: "5 spots",
    points: [
      "No coding required — bring ideas, taste, and creative direction",
      "Work alongside 10+ tech builders to realize your vision",
      "5 creatives selected — limited spots",
    ],
  },
];

const Tracks = () => {
  return (
    <section className="py-28 px-6 bg-background relative bg-grain">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Two paths, one mission</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Choose Your <span className="font-serif italic font-normal">Track</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Whether you ship code or shape ideas — there's a seat for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className="group rounded-3xl bg-card overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${track.color} to-transparent`} />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-full font-mono text-xs text-foreground/80 border border-border/50">
                    {track.badge}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-extrabold text-foreground mb-1 tracking-tight">
                  {track.title}
                </h3>
                <p className="font-serif italic text-muted-foreground text-lg mb-6">{track.subtitle}</p>
                <div className="space-y-3">
                  {track.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
