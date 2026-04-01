import { motion } from "framer-motion";
import ParticleFlower from "./ParticleFlower";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden bg-grain">
      <ParticleFlower />
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[hsl(14,90%,55%)] via-[hsl(340,80%,60%)] to-[hsl(260,60%,55%)] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[hsl(260,60%,55%)] to-[hsl(14,90%,55%)] opacity-[0.06] blur-[100px] pointer-events-none" />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
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

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4 text-foreground max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">Video</span>
          <span className="text-gradient">Claw</span>
          <br />
          <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-light">Hackerhouse</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          3 days at a villa. Build the next creative tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-[hsl(340,80%,55%)] text-white font-semibold text-lg rounded-full transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
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
