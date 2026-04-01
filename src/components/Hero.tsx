import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-[65%] h-full pointer-events-none select-none">
        <img
          src="/image copy.png"
          alt=""
          className="w-full h-full object-contain object-right-top opacity-[0.12]"
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
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-primary">VideoClaw</span>
          {" "}Hackerhouse
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-xl sm:text-2xl max-w-xl mb-10 leading-relaxed"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-full transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
          >
            Apply Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
