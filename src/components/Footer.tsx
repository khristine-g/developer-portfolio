const Footer = () => {
  return (
    <footer className="py-8 px-8 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Khristine Githige. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with passion & precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
