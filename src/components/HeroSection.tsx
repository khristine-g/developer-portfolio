import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6 bg-background">
      <div className="container mx-auto grid md:grid-cols-12 gap-10 items-center max-w-5xl">

        {/* Left Side: Direct Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          {/* Your Name as the Main Subheading */}
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              Khristine Githige
            </span>
            <span className="font-mono text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Software Engineer
            </span>
          </div>

          {/* Strong, Plain English Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-foreground">
            Building fast, clean web apps that{" "}
            <span className="text-gradient block sm:inline">
              just work.
            </span>
          </h1>

          {/* Clean Description Paragraph */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed font-normal">
            I am a software engineer focused on building reliable web applications using Next.js and TypeScript. I care about writing clean code, making pages load quickly, and keeping things easy to use.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-xs tracking-wide hover:bg-neutral-900 transition-colors duration-200 shadow-sm"
            >
              See My Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-border bg-transparent text-foreground font-medium text-xs tracking-wide hover:bg-neutral-50 hover:border-neutral-400 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right Side: Clean Visual Status Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-5 relative hidden md:flex items-center justify-center h-[420px] w-full"
        >
          {/* Minimalist Box Container */}
          <div className="absolute inset-0 border border-border/60 bg-neutral-50/50 rounded-sm flex flex-col justify-between p-6 overflow-hidden">
            
            {/* Top Status Line */}
            <div className="flex items-center justify-between w-full border-b border-border/40 pb-3">
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                Status // 2026
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Middle Quick Note */}
            <div className="my-auto max-w-xs">
              <span className="font-mono text-xs font-semibold text-muted-foreground/60 block mb-2">
                // Core Goal
              </span>
              <p className="text-sm text-foreground leading-relaxed font-normal">
                Good software isn't complicated. It is just about writing clean, readable code and building features that make sense to the user.
              </p>
            </div>

            {/* Bottom Details */}
            <div className="flex items-end justify-between border-t border-border/40 pt-3 w-full">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-muted-foreground block mb-0.5">
                  Currently Building With
                </span>
                <span className="font-mono text-xs font-medium text-foreground">
                  Next.js & TypeScript
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground/40">
                Active
              </span>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;