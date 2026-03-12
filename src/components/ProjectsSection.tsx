import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack marketplace with real-time inventory, payments, and analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Wellness App",
    description: "Mobile-first wellness tracker with habit streaks, mood journaling, and data visualizations.",
    tags: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "SaaS tool leveraging GPT for marketing copy, blog posts, and social media content.",
    tags: ["React", "Python", "OpenAI", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
