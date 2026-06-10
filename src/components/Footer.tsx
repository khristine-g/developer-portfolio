const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        
    
        <p className="font-mono text-[10px] tracking-tight text-muted-foreground/60">
          © {new Date().getFullYear()} Khristine Githige. All rights reserved.
        </p>

        
        
      </div>
    </footer>
  );
};

export default Footer;