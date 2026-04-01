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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            Brought to you by
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {organizers.map((organizer, i) => (
            <motion.div
              key={organizer.name}
              className="rounded-2xl bg-card p-8 flex items-center justify-center hover:bg-muted transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={organizer.logo}
                alt={`${organizer.name} logo`}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
