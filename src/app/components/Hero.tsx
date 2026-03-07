import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/hero.png" // <-- use public folder asset
          alt="Community meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1528]/95 via-[#2d2545]/80 to-[#2d2545]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1528]/40 via-transparent to-transparent" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#6b8e5e] via-[#a8d98a] to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-36 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#a8d98a] animate-pulse" />
            <span
              className="text-[#a8d98a]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Empowering Lives Since 2008
            </span>
          </div>

          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.1 }}
          >
            Nurturing Growth,{" "}
            <span className="text-[#a8d98a] italic">Building Independence</span>
          </h1>

          <p
            className="text-white/80 mb-8 max-w-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.8, fontWeight: 300 }}
          >
            New Beginnings provides compassionate, person-centered support for
            individuals with intellectual and developmental disabilities —
            helping them thrive in their communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-[#6b8e5e] text-white px-9 py-4 rounded-full hover:bg-[#5a7d4e] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(107,142,94,0.35)] hover:-translate-y-px"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.02em" }}
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/30 text-white px-9 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-px"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.95rem", letterSpacing: "0.02em" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-white/50"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Scroll
        </span>
        <ChevronDown size={18} className="text-white/50" />
      </div>
    </section>
  );
}
