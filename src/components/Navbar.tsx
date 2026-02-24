const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-padding flex items-center justify-between h-16">
        <span className="font-heading text-2xl font-bold text-foreground tracking-tight">
          JS
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-body tracking-wide">
          <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-foreground transition-colors">Services</button>
          <button onClick={() => scrollTo("problem")} className="text-muted-foreground hover:text-foreground transition-colors">How I Help</button>
          <button onClick={() => scrollTo("articles")} className="text-muted-foreground hover:text-foreground transition-colors">Articles</button>
          <button onClick={() => scrollTo("subscribe")} className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
