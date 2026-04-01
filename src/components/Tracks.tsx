import { motion } from "framer-motion";
import builderImg from "@/assets/builder-card.jpg";
import creativeImg from "@/assets/creative-card.jpg";

const tracks = [
  {
    title: "Builder",
    image: builderImg,
    points: [
      "Build creative tools, workflows, or wrappers using OpenClaw + Humeo",
      "Full creative freedom — solo or in teams",
      "Sponsored credits + building costs covered",
    ],
  },
  {
    title: "Creative",
    image: creativeImg,
    points: [
      "No coding required — bring ideas, taste, and creative direction",
      "Work alongside 10+ tech builders to realize your vision",
      "5 creatives selected — limited spots",
    ],
  },
];

const Tracks = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">Choose Your Track</h2>
          <p className="text-muted-foreground text-lg">Two paths to participate in the hackerhouse.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className="rounded-2xl bg-card overflow-hidden hover:ring-1 hover:ring-primary/30 transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative h-64">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-extrabold text-foreground mb-6 tracking-tight">
                  {track.title}
                </h3>
                <div className="space-y-4">
                  {track.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
