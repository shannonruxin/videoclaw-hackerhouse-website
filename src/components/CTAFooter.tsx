import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CTAFooter = () => {
  const [showContact, setShowContact] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !question) return;
    setStatus("sending");

    try {
      await fetch("https://formsubmit.co/ajax/shannonruxin@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message: question }),
      });
    } catch {
      // still show sent
    }

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setShowContact(false);
      setEmail("");
      setQuestion("");
    }, 2000);
  };

  return (
    <section id="apply" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
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

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://airtable.com/appBgmnpu1bJljnxX/pagcuQnj2YgQQ8pDN/form"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-cyan hover:scale-105 transition-transform duration-300"
            >
              Apply Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                <path d="M4 10h12M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <button
              onClick={() => setShowContact(!showContact)}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground/60"
            >
              Contact
            </button>
          </div>

          <AnimatePresence>
            {showContact && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <form
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto space-y-4 rounded-xl border border-border bg-card/60 backdrop-blur-md p-6 text-left"
                >
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-1.5">Question</label>
                    <textarea
                      required
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What would you like to know?"
                      rows={3}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-2.5 text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : status === "sent" ? "✓ Sent" : "Send"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
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
