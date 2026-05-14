import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticlesSection from "@/components/ArticlesSection";
import SubscribeSection from "@/components/SubscribeSection";

const Insights = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="bg-white pt-32 pb-12 md:pt-40 md:pb-16 section-padding">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl">
          Insights
        </h1>
        <p className="font-body text-lg text-gray-500 max-w-2xl">
          Notes from running cross-border operations in Mexico — what works, what breaks, and what to watch for.
        </p>
      </section>
      <ArticlesSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Insights;