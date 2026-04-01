import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Prize = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-12 rounded-2xl bg-card text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">Prizes</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-foreground">Cash Prize</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Top projects win cash prizes. Ship something extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prize;
