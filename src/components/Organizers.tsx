import { motion } from "framer-motion";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.svg";
import logo3 from "@/assets/logo3.svg";

const organizers = [
  { name: "AI Tinkerers Kuala Lumpur", logo: logo1 },
  { name: "AISEA", logo: logo3 },
  { name: "Humeo", logo: logo2 },
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

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Logo 3 */}
            <motion.div className="px-4 py-2 rounded-lg">
              <img
                src={logo3}
                alt="AISEA logo"
                className="h-28 sm:h-32 w-auto"
              />
            </motion.div>

            {/* Logo 1 */}
            <motion.div className="px-4 py-2 rounded-lg">
              <img
                src={logo1}
                alt="AI Tinkerers Kuala Lumpur logo"
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>
            
            {/* Logo 2*/}
            <motion.div className="px-8 py-5 rounded-lg">
              <img
                src={logo2}
                alt="Humeo logo"
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Organizers;
