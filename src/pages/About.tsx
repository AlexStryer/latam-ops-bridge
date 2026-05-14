import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-32 section-padding">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-12 max-w-3xl">
          About Jeremy
        </h1>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">
          <div className="aspect-[4/5] w-full bg-gray-200 flex items-center justify-center text-gray-400 font-body text-sm">
            Photo coming soon
          </div>
          <div className="space-y-6 font-body text-lg text-gray-700 leading-relaxed">
            <p>
              I'm Jeremy Stryer — a fractional COO and operator with 15+ years of experience helping international companies build, fix, and run operations in Mexico.
            </p>
            <p>
              Dual citizen, bilingual, and based on the ground. I've spent my career bridging US and Mexican teams, untangling delivery problems, and standing up the kind of operational systems that actually hold across the border.
            </p>
            <p>
              I work with US tech and professional services firms running nearshore teams, leadership groups expanding into Mexico, and founders who need a senior operator without the full-time hire.
            </p>
            <p className="text-gray-500 italic">
              [Full bio coming soon — replace this placeholder text with your own.]
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;