import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden bg-grain">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[hsl(14,90%,55%)] via-[hsl(340,80%,60%)] to-[hsl(260,60%,55%)] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[hsl(260,60%,55%)] to-[hsl(14,90%,55%)] opacity-[0.06] blur-[100px] pointer-events-none" />

      {/* Right side image */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none select-none hidden lg:block">
        <img
          src="/image copy.png"
          alt=""
          className="w-full h-full object-contain object-right-top opacity-70"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 right-[35%] w-3 h-3 rounded-full bg-primary/40 hidden lg:block"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-accent/40 hidden lg:block"
        animate={{ y: [0, 15, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-3xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/10 text-foreground/70 font-mono text-xs tracking-wider mb-10 bg-card/60 backdrop-blur-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            April 10–12, 2026 · Kuala Lumpur
          </div>
        </motion.div>

        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          where tech meets taste
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">VideoClaw</span>
          <br />
          Hackerhouse
        </motion.h1>

        <motion.p
          className="font-serif italic text-2xl sm:text-3xl text-foreground/60 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Build the tools creators dream about.
        </motion.p>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          3 days in a private villa. Builders, creatives, and AI — 
          assembling the next generation of{" "}
          <span className="text-foreground font-semibold">creative pipelines</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-[hsl(340,80%,55%)] text-white font-bold text-base rounded-full transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-lg">+</span>
            Apply Now
          </a>
          <a
            href="mailto:shannon@checkmateresearch.space"
            className="text-foreground/60 font-medium text-base hover:text-primary transition-colors border-b border-foreground/20 hover:border-primary pb-0.5"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
