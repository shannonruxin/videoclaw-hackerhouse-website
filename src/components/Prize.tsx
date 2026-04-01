import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Prize = () => {
  return (
    <section className="py-28 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-16 rounded-[2rem] bg-gradient-to-br from-background via-background to-primary/5 text-center border border-border/50 overflow-hidden"
        >
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/10 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Prizes</p>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight text-gradient">
              Cash Prize
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-serif italic">
              Top projects win cash prizes. Ship something extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prize;
