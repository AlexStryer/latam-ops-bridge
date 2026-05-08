import { ArrowRight } from "lucide-react";

const problems = [
  {
    text: "You're expanding into Mexico and need someone to build the operation from the ground up",
  },
  {
    text: "You have a Mexico team but delivery keeps slipping and HQ can't figure out why",
  },
  {
    text: "Your Mexico team is talented but something between them and the US side isn't connecting",
  },
  {
    text: "You need to hire in Mexico and don't know where to start",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-white py-20 md:py-32 section-padding">
      <div className="max-w-4xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
          Most US companies expanding into Mexico make the same mistake.
        </h2>
        <p className="font-body text-lg text-gray-500 leading-relaxed mb-14 max-w-3xl">
          They hire good people, hand them US systems, and expect the operation to run itself. Six months later, delivery is slipping, clients are frustrated, and nobody on the ground wants to be the one to say so.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {problems.map((p, i) => (
          <div
            key={i}
            className="group border border-gray-200 p-8 hover:border-primary/50 hover:bg-gray-50 transition-all duration-300"
          >
            <ArrowRight className="text-primary mb-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <p className="font-body text-base leading-relaxed text-gray-800">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
