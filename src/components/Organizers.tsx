import { motion } from "framer-motion";
import aiTinkerersKlLogo from "@/assets/image1.png";

const organizers = [
  { name: "AI Tinkerers Kuala Lumpur", logo: aiTinkerersKlLogo },
  { name: "Organizer 2", logo: "/placeholder.svg" },
  { name: "Organizer 3", logo: "/placeholder.svg" },
];

const Organizers = () => {
  return (
    <section className="relative py-14 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            Brought to you by
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {organizers.map((organizer, i) => (
            <motion.div
              key={organizer.name}
              className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-5 flex items-center justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img
                src={organizer.logo}
                alt={`${organizer.name} logo`}
                className="h-10 w-auto opacity-80"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;

