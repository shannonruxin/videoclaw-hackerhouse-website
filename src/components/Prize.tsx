import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Prize = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative p-12 rounded-2xl border border-neon-magenta/30 bg-card/50 overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-neon-magenta/5" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-neon-magenta/10 blur-[100px]" />

          <div className="relative">
            <Trophy className="w-12 h-12 text-neon-magenta mx-auto mb-6" strokeWidth={1.5} />
            <p className="text-neon-magenta font-mono text-sm tracking-[0.2em] uppercase mb-3">Prizes</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Cash Prize</h2>
            <p className="text-muted-foreground text-lg">
              Top projects win cash prizes. Ship something extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prize;
