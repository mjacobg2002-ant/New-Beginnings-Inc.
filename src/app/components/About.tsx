import { Heart, Users, Star, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const aboutImg =
  "https://images.unsplash.com/photo-1591478762849-9ec3cf7d3b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMHdoZWVsY2hhaXIlMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg1ODAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  { icon: Heart, title: "Compassion", desc: "Every individual is treated with dignity, respect, and heartfelt care." },
  { icon: Users, title: "Community", desc: "Building strong connections that foster belonging and inclusion." },
  { icon: Star, title: "Excellence", desc: "Delivering the highest quality care through trained professionals." },
  { icon: Shield, title: "Trust", desc: "Families rely on us for dependable, transparent support services." },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Mobile header */}
        <div className="lg:hidden text-center mb-8">
          <span
            className="text-[#6b8e5e]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Who We Are
          </span>
          <h2
            className="text-[#2d2545] mt-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Dedicated to Empowering Individuals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image with badge — no overflow-hidden on this wrapper so badge is visible */}
          <div className="relative pb-8 sm:pb-6">
            <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)] aspect-[4/5] sm:aspect-[3/4] max-h-[520px]">
              <ImageWithFallback
                src={aboutImg}
                alt="Community support"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* 18+ badge — sits outside the image container, fully visible */}
            <div className="absolute bottom-0 right-4 sm:right-6 bg-[#2d2545] text-white px-6 py-4 sm:px-8 sm:py-5 rounded-2xl shadow-[0_8px_32px_rgba(45,37,69,0.3)] z-10">
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>
                18<sup style={{ fontSize: "0.85rem", fontWeight: 600 }}>+</sup>
              </p>
              <p className="text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Years of Service
              </p>
            </div>
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#6b8e5e]/25 rounded-tl-2xl hidden sm:block" />
          </div>

          {/* Content */}
          <div>
            <span
              className="text-[#6b8e5e] hidden lg:block"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Who We Are
            </span>
            <h2
              className="text-[#2d2545] mt-2 mb-5 hidden lg:block"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              Dedicated to Empowering Individuals with Disabilities
            </h2>
            <p
              className="text-[#5a5475] mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.85, fontWeight: 400 }}
            >
              New Beginnings is a community-based organization providing
              comprehensive support services for individuals with intellectual
              and developmental disabilities. Our person-centered approach
              ensures each individual receives the care, training, and
              opportunities they need to live fulfilling, independent lives.
            </p>
            <p
              className="text-[#5a5475] mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.85, fontWeight: 400 }}
            >
              From day programs and supported employment to community
              integration and life skills training, we are here every step of
              the way.
            </p>
            <div className="w-12 h-[2px] bg-[#6b8e5e]/30 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#6b8e5e]/8 border border-[#6b8e5e]/15 rounded-xl flex items-center justify-center">
                    <v.icon size={18} className="text-[#6b8e5e]" />
                  </div>
                  <div>
                    <p className="text-[#2d2545] mb-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                      {v.title}
                    </p>
                    <p className="text-[#7a7494]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.825rem", lineHeight: 1.55, fontWeight: 400 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
