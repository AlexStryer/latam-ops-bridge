const Footer = () => {
  return (
    <footer className="light-section py-16 section-padding border-t border-border">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="font-heading text-2xl font-bold text-foreground">JS</span>
          <p className="font-body text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
            Based in Querétaro and Mexico City. From Boston. Bilingual. Dual Citizen. Open to leadership roles or advisory engagements.
          </p>
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
