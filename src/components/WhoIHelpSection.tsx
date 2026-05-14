import { Globe2, Building, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Globe2,
    title: "International firms in Mexico",
    description:
      "US and global companies with existing teams in Mexico that need someone who can bridge cultures, fix delivery, and tighten operations.",
  },
  {
    icon: Rocket,
    title: "Companies expanding south",
    description:
      "Leadership teams planning a Mexico launch who need an experienced operator on the ground from day one — entity, hiring, and systems.",
  },
  {
    icon: Building,
    title: "Professional services & tech",
    description:
      "Consultancies, agencies, and tech-adjacent firms running nearshore delivery teams that have outgrown ad-hoc management.",
  },
];

const WhoIHelpSection = () => {
  return (
    <section id="who" className="bg-gray-50 py-20 md:py-32 section-padding">
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-gray-900">
        Who I help
      </h2>
      <p className="font-body text-lg text-gray-500 leading-relaxed mb-16 max-w-3xl">
        I work with international leadership teams who need an operator that understands both sides of the border.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {audiences.map((a, i) => (
          <div key={i} className="bg-white border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-gray-900">
              {a.title}
            </h3>
            <p className="font-body text-gray-500 leading-relaxed">
              {a.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIHelpSection;