import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Software Engineer
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Jane Doe</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            I craft elegant, high-performance web applications with clean code and thoughtful design. Turning complex problems into simple, beautiful solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex px-6 py-3 rounded-lg border border-border text-foreground font-display font-semibold hover:bg-secondary transition-colors"
            >
              About Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden glow-shadow">
            <img
              src={heroImg}
              alt="Portrait of Jane Doe, Software Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30" />
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 border border-primary/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
