import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const email = "khristine@example.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-card/50">
      <div className="container mx-auto max-w-2xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Contact
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project,
            a question, or just want to say hi — I’d love to hear from you.
          </p>

          {/* Email Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Email button */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              <Mail size={18} />
              Send Email
            </a>

            {/* Copy email */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">

            {/* GitHub */}
            <a
              href="https://github.com/khristine-g"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
              aria-label="GitHub profile"
            >
              <Github size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/khristine-githige/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={22} />
            </a>

          
           
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;