import { motion } from "framer-motion";

const CTAFooter = () => {
  return (
    <section id="apply" className="py-28 px-6 bg-background relative bg-grain">
      {/* Top decorative */}
      <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.05]">
            Build the future of
            <br />
            <span className="text-gradient">creative tools.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            3 days. 1 villa. The best builders and creatives. Limited spots.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a
              href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-[hsl(340,80%,55%)] text-white font-semibold text-lg rounded-full hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Apply Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="rounded-2xl bg-card/60 border border-border/40 px-8 py-5 backdrop-blur-sm">
              <p className="font-mono text-[10px] text-muted-foreground mb-2 uppercase tracking-[0.2em]">
                Contact the organizers
              </p>
              <a
                href="mailto:shannon@checkmateresearch.space"
                className="text-foreground/70 font-medium hover:text-primary transition-colors"
              >
                shannon@checkmateresearch.space
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-28 pt-8 border-t border-border/50">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            VideoClaw Hackerhouse · April 2026 · KL
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
