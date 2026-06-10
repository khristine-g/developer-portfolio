import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            Passionate about building<br />
            <span className="text-gradient">exceptional software</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            I'm a software engineer who loves transforming ideas into reality through code. 
            With a strong foundation in full-stack development, I specialize in creating 
            performant, accessible, and visually stunning web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            When I'm not coding, you'll find me contributing to open source, mentoring 
            aspiring developers, or exploring the latest in tech. I believe great software 
            is built at the intersection of engineering excellence and empathetic design.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
