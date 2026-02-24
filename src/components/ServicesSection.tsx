import { Building2, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Fractional COO",
    description:
      "Fractional COO for international companies running teams in Mexico. I stand up operations, build recruitment and delivery capabilities, and make sure what gets promised actually gets delivered.",
  },
  {
    icon: Users,
    title: "Nearshore Dev Teams",
    description:
      "Nearshore dev teams and technical hiring via my dev agency, HolaDev. I've built cross-border engineering teams and managed delivery for US clients.",
  },
  {
    icon: Building2,
    title: "Mexico Market Entry",
    description:
      "Entity setup, compliance, local networks. I help companies navigate the complexities of establishing operations in Mexico from scratch.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 md:py-32">
      <div className="section-padding">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gray-900">
          What I do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-gray-900">
                {s.title}
              </h3>
              <p className="font-body text-gray-500 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;