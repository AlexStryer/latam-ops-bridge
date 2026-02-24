import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with email service later
    alert(`Thanks for subscribing! We'll send insights to ${email}`);
    setEmail("");
  };

  return (
    <section id="subscribe" className="bg-subscribe py-20 md:py-28">
      <div className="section-padding">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-subscribe-foreground mb-10">
          Subscribe for weekly insights
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-3xl">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-4 bg-background text-foreground border-none outline-none font-body text-base placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="bg-background text-foreground px-10 py-4 font-body font-semibold text-base hover:bg-secondary transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
