import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Paintbrush } from "lucide-react";

const examples = [
  { icon: Cpu, text: "AI creative tools" },
  { icon: Layers, text: "Automated creative pipelines" },
  { icon: Paintbrush, text: "New ways to create content" },
  { icon: Zap, text: "Creative workflows on OpenClaw + Humeo" },
];

const WhatYoullBuild = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neon-violet font-mono text-sm tracking-[0.2em] uppercase mb-3">The Mission</p>
          <h2 className="text-4xl sm:text-5xl font-bold">What You'll Build</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Creative workflows and tools built using OpenClaw on top of Humeo. Push the boundary of what's possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {examples.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-neon-violet/30 transition-colors duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-neon-violet/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-neon-violet" strokeWidth={1.5} />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullBuild;
