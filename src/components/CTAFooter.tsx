import { motion } from "framer-motion";

const CTAFooter = () => {
  return (
    <section id="apply" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-neon-cyan/8 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Build the future of
            <br />
            <span className="text-gradient-neon">creative tools.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            3 days. 1 villa. The best builders and creatives. Limited spots.
          </p>
          <a
            href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-cyan hover:scale-105 transition-transform duration-300"
          >
            Apply Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm font-mono">
            VideoClaw Hackerhouse · April 2026 · KL
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
