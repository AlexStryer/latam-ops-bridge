import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 section-padding w-full">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl mb-8">
          Helping international companies{" "}
          <span className="text-primary italic">build, fix, and run</span>{" "}
          operations in Mexico.
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          15+ years in Mexico. Dual citizen. Bilingual. I help international companies get Mexico right.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-4 font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-foreground/30 text-foreground px-8 py-4 font-body font-semibold text-base hover:bg-foreground/5 transition-colors"
          >
            How I Can Help
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
