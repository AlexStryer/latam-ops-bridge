const articles = [
  {
    tag: "Operations",
    title: "Why Your Mexico Team Isn't Delivering",
    excerpt:
      "Most delivery problems aren't about talent — they're about structure. Here's what I see when US companies struggle with their Mexico-based teams.",
  },
  {
    tag: "Expansion",
    title: "The Real Cost of Mexico Market Entry",
    excerpt:
      "Entity setup, compliance, payroll — the hidden complexity of expanding south of the border, and how to navigate it without burning runway.",
  },
  {
    tag: "Nearshore",
    title: "Building a Nearshore Dev Team That Ships",
    excerpt:
      "Technical hiring in Mexico is competitive. Here's how to attract, vet, and retain engineering talent that actually delivers for US clients.",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-20 md:py-32 section-padding">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Articles
        </h2>
      </div>
      <div className="space-y-12">
        {articles.map((a, i) => (
          <article
            key={i}
            className="group border-b border-border pb-12 last:border-none cursor-pointer"
          >
            <span className="text-primary text-sm font-body font-semibold uppercase tracking-widest mb-3 block">
              {a.tag}
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
              {a.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl">
              {a.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
