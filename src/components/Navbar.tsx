import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-padding flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-2xl font-bold text-foreground tracking-tight">
          JS
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-body tracking-wide">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors">Insights</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
