import { Phone, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative bg-[#2d2545] rounded-3xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6b8e5e]/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#6b8e5e]/8 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6b8e5e] via-[#a8d98a] to-transparent" />

          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
            <span
              className="text-[#a8d98a]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Get In Touch
            </span>

            <h2
              className="text-white mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Ready to Start the <span className="italic text-[#a8d98a]">Journey?</span>
            </h2>
            <p
              className="text-white/60 max-w-xl mx-auto mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}
            >
              Contact us today to learn more about our programs and how we can
              support your loved one on their path to independence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
              <a
                href="tel:+14105978092"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#6b8e5e] text-white px-9 py-4 rounded-full hover:bg-[#5a7d4e] hover:shadow-[0_8px_30px_rgba(107,142,94,0.35)] transition-all duration-300 hover:-translate-y-px"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                <Phone size={17} />
                (410) 597-8092
              </a>
              <a
                href="mailto:info@newbeginnings.org"
                className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 text-white px-9 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-px"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.95rem" }}
              >
                <Mail size={17} />
                info@newbeginnings.org
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/40">
              <MapPin size={14} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}>
                123 Community Drive, Suite 100 — Serving families across the region
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}