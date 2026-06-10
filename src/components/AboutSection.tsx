import { motion } from "framer-motion";

const focuses = [
  { 
    title: "01 // Frontend", 
    description: "I build responsive interfaces using Next.js and TypeScript. I make sure data flows correctly and the code stays easy to update later." 
  },
  { 
    title: "02 // User Experience", 
    description: "I focus on clean layouts and simple navigation. I want pages to load fast and be easy for anyone to use." 
  },
  { 
    title: "03 // Backend & APIs", 
    description: "I connect frontends to databases and servers. I make sure data travels securely and reliably between the two." 
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl">
        
       
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">
              About Me
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
              A developer focused on keeping things <span className="text-gradient">simple.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-normal"
          >
            <p>
              I build web applications that look clean and run smoothly on the inside. 
              Instead of spending weeks overthinking a project, I prefer to get to work quickly, 
              write clean code, test it, and fix things as I learn. 
            </p>
            <p>
              I like knowing exactly how my tools work rather than just copying and pasting template code. 
              Whether I am speeding up page load times or writing tests to catch bugs early, my goal is always 
              the same: building clean, useful tools that do exactly what they are supposed to do.
            </p>
          </motion.div>
          
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 pt-10 border-t border-border/60"
        >
          {focuses.map((focus) => (
            <div key={focus.title} className="p-5 rounded-sm bg-gradient-subtle border border-border/60 flex flex-col justify-between min-h-[150px]">
              <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-3">
                {focus.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {focus.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;