import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" }
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/70 backdrop-blur-md border-b border-border/40"
    >
     
      <a 
        href="#" 
        className="font-display text-sm font-bold tracking-wider text-foreground uppercase group"
      >
        Khristine Githige <span className="font-mono text-xs font-light text-muted-foreground/60 transition-opacity duration-300 group-hover:text-foreground">// Portfolio</span>
      </a>

     
      <ul className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-4 py-2 rounded-sm border border-border/80 bg-neutral-50 font-mono text-xs font-medium text-foreground tracking-tight hover:border-neutral-400 hover:bg-white transition-all duration-300"
      >
        Contact
      </a>
    </motion.nav>
  );
};

export default Navbar;