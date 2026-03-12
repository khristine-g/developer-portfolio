import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
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
            I'm currently open to new opportunities. Whether you have a question or 
            just want to say hi, my inbox is always open.
          </p>
          <a
            href="mailto:jane@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:opacity-90 transition-opacity glow-shadow"
          >
            <Mail size={20} />
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="#"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={22} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
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
