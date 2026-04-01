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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">The Details</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about the residency format.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="p-8 rounded-2xl bg-card hover:ring-1 hover:ring-primary/30 transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-2">{item.label}</p>
              <p className="text-foreground text-xl font-semibold mb-2 tracking-tight">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
