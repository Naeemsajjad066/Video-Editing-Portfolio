import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aftab Rasheed",
    jobTitle: "Video Editor",
    url: "/",
    sameAs: ["https://youtube.com/", "https://instagram.com/", "https://linkedin.com/"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <IntroVideo />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
