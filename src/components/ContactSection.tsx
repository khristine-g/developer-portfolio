import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "githigekhristine@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email address", err);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Stating the Intent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">
              Contact
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Get in <span className="text-gradient">touch.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-normal">
              I am open to new full-time software engineering roles or interesting projects. Drop me a line if you want to work together.
            </p>
          </motion.div>

          {/* Right Side: Clean Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 space-y-10"
          >
            {/* Email Display Action */}
            <div className="group block border-b border-border/60 pb-6">
              <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block mb-2">
                Email Me
              </span>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight hover:opacity-70 transition-opacity duration-200 break-all"
                >
                  {email}
                </a>
                
                {/* Minimal Copy Action inline */}
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200 bg-neutral-50 px-3 py-1.5 border border-border/50 rounded-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block mb-2">
                  GitHub
                </span>
                <a
                  href="https://github.com/khristine-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70 transition-opacity duration-200 group/link"
                >
                  github.com/khristine-g
                  <ArrowUpRight size={14} className="text-muted-foreground transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block mb-2">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/khristine-githige/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-70 transition-opacity duration-200 group/link"
                >
                  Connect with me
                  <ArrowUpRight size={14} className="text-muted-foreground transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;