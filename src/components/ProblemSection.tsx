import { ArrowRight } from "lucide-react";

const problems = [
  {
    text: "You're expanding into Mexico and need someone to build and run the operation",
  },
  {
    text: "You have a Mexico team but delivery is slipping and HQ can't see why",
  },
  {
    text: "Your cross-border operations need structure, process, and someone who can bridge both sides",
  },
  {
    text: "You need nearshore dev teams and technical hiring (via my dev agency, HolaDev)",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-32 section-padding">
      <div className="max-w-4xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
          Expanding into Mexico takes more than hiring talent.
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-14 max-w-3xl">
          It takes someone on the ground who can build and run the operation. I've lived in Mexico for 15+ years and spent the last 5 building and running cross-border operations as COO, founder, and ops leader.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {problems.map((p, i) => (
          <div
            key={i}
            className="group border border-border p-8 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <ArrowRight className="text-primary mb-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <p className="font-body text-base leading-relaxed text-foreground">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
