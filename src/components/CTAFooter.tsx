import { motion } from "framer-motion";

const CTAFooter = () => {
  return (
    <section id="apply" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-foreground">
            Build the future of
            <br />
            <span className="text-primary">creative tools.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            3 days. 1 villa. The best builders and creatives. Limited spots.
          </p>

          <div className="flex flex-col items-center justify-center gap-8">
            <a
              href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
              className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold text-base rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Apply Now
            </a>

            <div className="rounded-2xl bg-card px-8 py-6 text-center">
              <p className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wide">
                Contact the organizers
              </p>
              <a
                href="mailto:shannon@checkmateresearch.space"
                className="text-primary font-medium hover:underline transition-colors"
              >
                shannon@checkmateresearch.space
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            VideoClaw Hackerhouse · April 2026 · KL
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
