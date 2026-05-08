const Footer = () => {
  return (
    <footer className="bg-background py-16 section-padding border-t border-border">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="font-heading text-2xl font-bold text-foreground">JS</span>
        </div>
        <div className="flex flex-col gap-2 text-sm font-body text-muted-foreground">
          <a href="mailto:hello@jeremystryer.com" className="hover:text-foreground transition-colors">
            hello@jeremystryer.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
      <p className="mt-12 text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Jeremy Stryer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
