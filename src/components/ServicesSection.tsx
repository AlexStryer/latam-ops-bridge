import { Stethoscope, Compass, Briefcase, UserSearch } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Operations Diagnostic",
    description:
      "Three weeks. Stakeholder interviews, one-on-ones, process review. You get a written report with findings and a clear path forward. Optional site visit to your Mexico office.",
  },
  {
    icon: Compass,
    title: "Advisory & Coaching",
    description:
      "Your systems exist. Your team needs someone to bridge the gap. I work with your leadership to build the communication structures, accountability frameworks, and workflows that actually hold across the border.",
  },
  {
    icon: Briefcase,
    title: "Fractional COO",
    description:
      "I join your team and own the operation. You get a senior ops leader who knows Mexico, without the full-time hire. I build the systems, manage the people, and make sure what gets promised actually gets delivered.",
  },
  {
    icon: UserSearch,
    title: "Mexico Talent",
    description:
      "Looking for your next ops manager, delivery lead, or key hire in Mexico? I tap my network and recruiter relationships to find the right fit for professional services and tech-adjacent firms.",
  },  
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="section-padding">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gray-900">
          What I do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
