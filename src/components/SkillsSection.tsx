import { motion } from "framer-motion";

const stackGroups = [
  {
    category: "Frontend",
    description: "Building fast, responsive user interfaces. I focus on clean layouts, smooth user flows, and keeping code easy to read.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend & Data",
    description: "Setting up servers, managing databases, and creating secure APIs to make sure data flows smoothly between the database and the screen.",
    tools: ["Node.js", "Express.js", "Ruby on Rails", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Testing & Tools",
    description: "Using automated tools and simple workflows to catch bugs early and make deployment stress-free.",
    tools: ["Vitest", "Git Automation", "Linux Environments"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Layout */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">
              Capabilities
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              The tools <span className="text-gradient">I use most.</span>
            </h2>
          </motion.div>
          
          <div className="md:col-span-7 flex items-end">
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed font-normal">
              Instead of trying to learn every framework out there, I focus on a specific 
              set of tools that help me build fast, reliable web applications from scratch.
            </p>
          </div>
        </div>

        {/* Minimal Stack List */}
        <div className="space-y-0 border-t border-border/60">
          {stackGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/60 items-start hover:bg-neutral-50/50 transition-colors duration-200 px-2 group"
            >
              {/* Category Name */}
              <div className="md:col-span-3">
                <h3 className="font-display text-sm font-semibold tracking-wide text-foreground">
                  {group.category}
                </h3>
              </div>

              {/* Functional Purpose Statement */}
              <div className="md:col-span-5">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {group.description}
                </p>
              </div>

              {/* Badges/Tools */}
              <div className="md:col-span-4 flex flex-wrap gap-1.5 md:justify-end">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-sm border border-border/70 bg-transparent text-[11px] font-mono text-muted-foreground tracking-tight group-hover:border-neutral-400 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;