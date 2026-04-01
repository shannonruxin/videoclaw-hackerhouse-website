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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">The Mission</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">What You'll Build</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Creative workflows and tools built using OpenClaw on top of Humeo. Push the boundary of what's possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {examples.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card hover:ring-1 hover:ring-primary/30 transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground font-medium text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullBuild;
