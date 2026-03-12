import { motion } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <a href="#" className="font-display text-xl font-bold text-gradient">
        Portfolio
      </a>
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-display text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-flex px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
};

export default Navbar;
