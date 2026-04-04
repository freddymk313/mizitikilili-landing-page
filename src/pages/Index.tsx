import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Founder from "@/components/Founder";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <MarqueeBand />
    <About />
    <Services />
    <Impact />
    <Founder />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
);

export default Index;
