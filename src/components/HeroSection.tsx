import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Software Engineer
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">
              Khristine
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I build modern web applications that combine clean code,
            thoughtful design, and great user experiences. I enjoy solving
            real-world problems and turning ideas into products people love
            using.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              View My Work
            </a>

            <a
              href="#about"
              className="inline-flex px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
            >
              About Me
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="relative"
        >
          <div className="relative bg-[#0d1117] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">

            {/* VS Code Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#161b22]">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <span className="text-gray-400 text-sm font-mono">
                aboutMe.js
              </span>

              <div></div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm md:text-base leading-7 font-mono text-gray-300">
{`const developer = {
  name: "Khristine",

  role: "Software Engineer",

  mission:
    "Build solutions that make
     people's lives easier",

  values: [
    "Growth",
    "Creativity",
    "Excellence"
  ],

  currentlyWorkingOn:
    "Creating meaningful digital experiences",

  status: "Available for opportunities"
};

export default developer;`}
              </pre>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;