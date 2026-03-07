import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Resources } from "./components/Resources";
import { Events } from "./components/Events";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Resources />
      <Events />
      <CTA />
      <Footer />
    </div>
  );
}