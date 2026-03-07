import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Johnson",
    role: "Parent",
    initials: "MJ",
    text: "New Beginnings has been a blessing for our family. The care and attention my son receives has helped him grow in ways we never imagined possible. The staff truly treats him like family.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Guardian",
    initials: "DC",
    text: "The supported employment program gave my brother the confidence to thrive in a real workplace. He looks forward to going to work every day. I can't thank them enough.",
    stars: 5,
  },
  {
    name: "Sarah Williams",
    role: "Family Member",
    initials: "SW",
    text: "Finding New Beginnings was a turning point for us. Their day programs offer incredible activities and the staff is so patient, caring, and professional. Highly recommended.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#2d2545] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#a8d98a]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Testimonials
          </span>
          <h2
            className="text-white mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Trusted by Families
          </h2>
          <p
            className="text-white/55"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 400 }}
          >
            Hear from the families and caregivers who trust us with the care of
            their loved ones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-7 lg:p-8 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500"
            >
              <Quote size={24} className="text-[#a8d98a]/25 mb-4" strokeWidth={1.5} />
              <p
                className="text-white/80 mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.85, fontWeight: 300, fontStyle: "italic" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#d4a94a] fill-[#d4a94a]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#6b8e5e]/20 border border-[#6b8e5e]/30 flex items-center justify-center"
                >
                  <span
                    className="text-[#a8d98a]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-white/40"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}