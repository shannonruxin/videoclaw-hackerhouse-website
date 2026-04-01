import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "When",
    value: "April 10–12, 2026",
    sub: "Friday to Sunday",
  },
  {
    icon: MapPin,
    label: "Where",
    value: "Villa in Kuala Lumpur",
    sub: "Private creative compound",
  },
  {
    icon: Sparkles,
    label: "Cost",
    value: "Fully Sponsored",
    sub: "Accommodation · Food · Credits",
  },
];

const EventDetails = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neon-magenta font-mono text-sm tracking-[0.2em] uppercase mb-3">The Details</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Residency Format</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-center group hover:border-neon-cyan/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-neon-cyan mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-foreground text-xl font-semibold mb-1">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
