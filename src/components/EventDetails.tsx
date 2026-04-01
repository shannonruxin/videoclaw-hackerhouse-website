import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "When",
    value: "April 10–12, 2026",
    sub: "Friday to Sunday",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    label: "Where",
    value: "Villa in Kuala Lumpur",
    sub: "Private creative compound",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    label: "Cost",
    value: "Fully Sponsored",
    sub: "Accommodation · Food · Credits",
    accent: "bg-[hsl(340,80%,55%)]/10 text-[hsl(340,80%,55%)]",
  },
];

const EventDetails = () => {
  return (
    <section className="py-28 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Logistics</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            The <span className="font-serif italic font-normal">Details</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-bl from-primary/5 to-transparent -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center mb-6 relative z-10`}>
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 relative z-10">{item.label}</p>
              <p className="text-foreground text-xl font-bold mb-2 tracking-tight relative z-10">{item.value}</p>
              <p className="text-muted-foreground text-sm relative z-10">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
