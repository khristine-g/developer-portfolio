import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  
 
  {
    id: "01",
    title: "Vuma Sasa",
    subtitle: "Web Application",
    description: "A fast web portal built for clean user communication and quick content delivery. It focuses on simple navigation, fast load speeds, and working perfectly on mobile devices.",
    challenge: "Fixed layout shifts and optimized image loading so the website works smoothly even for users with slow or unreliable mobile internet.",
    tags: ["React", "JavaScript", "UI Design", "CSS"],
    liveUrl: "https://vumasasa.com/",
    githubUrl: null, 
  },
   {
    id: "02",
    title: "Vuma Analytica",
    subtitle: "Data Analytics Platform",
    description: "A secure web platform used to display and track user behavior statistics. It takes large amounts of data and displays them in clean, easy-to-read charts and dashboards.",
    challenge: "Optimized how the app handles large sets of data in the browser so the dashboards stay fast and responsive even when loading a lot of information.",
    tags: ["Next.js", "TypeScript", "Data Tables", "Tailwind CSS"],
    liveUrl: "https://www.vumaanalytica.com/",
    githubUrl: null, 
  },
  {
    id: "03",
    title: "Kifaru Shop",
    subtitle: "E-Commerce Website",
    description: "An online store built to be fast and secure. It uses server-side rendering for quick page loads, handles user shopping carts reliably, and includes a smooth checkout flow that connects to local payment options.",
    challenge: "Wrote type-safe server functions to make sure customer checkout data stays completely safe and to reduce loading delays during payments.",
    tags: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://kifaru-shop.vercel.app/", 
    githubUrl: "https://github.com/khristine-g/kifaru-shop", 
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl">
   
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">
            Selected Output
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Projects I have built and worked on.
          </h2>
        </motion.div>

       
        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-12 gap-6 pt-10 border-t border-border/60"
            >
              
            
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>
                  <span className="font-display text-2xl font-light text-muted-foreground/30 block mb-1">
                    {project.id}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mt-0.5">
                    {project.subtitle}
                  </span>
                </div>

               
                <div className="flex flex-wrap gap-1 mt-4 md:mt-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-sm border border-border/70 text-[10px] font-mono text-muted-foreground bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            
              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
               
                <div className="p-3.5 rounded-sm bg-neutral-50 border border-border/40">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                    What I Solved
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

           
              <div className="md:col-span-2 flex md:flex-col gap-3 justify-end items-end md:pb-1">
          
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={`Code for ${project.title}`}
                  >
                    Code 
                    <Github size={12} />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase block text-right select-none">
                    Private Code
                  </span>
                )}
                
                
                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-foreground hover:opacity-70 transition-opacity duration-200"
                    aria-label={`Visit ${project.title}`}
                  >
                    Live Site 
                    <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-muted-foreground/30 uppercase block text-right select-none">
                    In Progress
                  </span>
                )}
                
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;