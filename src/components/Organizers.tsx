import { motion } from "framer-motion";
import aiTinkerersKlLogo from "@/assets/logo1.png";
import image2Logo from "@/assets/logo2.svg";

const organizers = [
  { name: "AI Tinkerers Kuala Lumpur", logo: aiTinkerersKlLogo },
  { name: "Organizer 2", logo: "/placeholder.svg" },
  { name: "Humeo", logo: image2Logo },
];

const Organizers = () => {
  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent h-px top-0" />
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Brought to you by
        </motion.p>

        <div className="flex items-center justify-center gap-12 flex-wrap">
          {organizers.map((organizer, i) => (
            <motion.div
              key={organizer.name}
              className="group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={organizer.logo}
                alt={`${organizer.name} logo`}
                className="h-10 sm:h-12 w-auto opacity-40 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
