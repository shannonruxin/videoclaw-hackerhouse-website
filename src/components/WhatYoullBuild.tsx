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
    <section className="py-28 px-6 bg-background relative bg-grain">
      {/* Decorative diagonal line */}
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">The mission</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            What You'll <span className="font-serif italic font-normal">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Creative workflows and tools built using OpenClaw on top of Humeo. 
            Push the boundary of what's possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {examples.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
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
