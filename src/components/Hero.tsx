import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-[65%] h-full pointer-events-none select-none">
        <img
          src="/image copy.png"
          alt=""
          className="w-full h-full object-contain object-right-top opacity-[0.52]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-3xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary font-medium text-sm mb-10 bg-primary/5">
            April 10–12, 2026 · Kuala Lumpur
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15] mb-8 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-primary">VideoClaw</span>
          {" "}Hackerhouse
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          3 days at a villa. Build the next generation of{" "}
          <span className="text-foreground font-semibold">creative tools</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-bold text-base rounded-full transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
          >
            Apply Now
          </a>
          <a
            href="mailto:shannon@checkmateresearch.space"
            className="text-primary font-bold text-base hover:underline transition-colors"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
