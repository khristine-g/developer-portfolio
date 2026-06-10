import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Ruby on Rails",
      "Python",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Linux (Ubuntu)",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-8 bg-card/50">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Skills
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;