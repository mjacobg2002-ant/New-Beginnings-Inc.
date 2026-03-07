import { Briefcase, Home, Users, BookOpen, HeartHandshake, MapPin } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Support",
    desc: "Safe, comfortable living environments with 24/7 staff support tailored to individual needs and preferences.",
  },
  {
    icon: Briefcase,
    title: "Supported Employment",
    desc: "Job coaching, skills training, and placement services that help individuals find meaningful work opportunities.",
  },
  {
    icon: Users,
    title: "Day Programs",
    desc: "Engaging activities focused on skill-building, socialization, and personal development in a supportive setting.",
  },
  {
    icon: BookOpen,
    title: "Life Skills Training",
    desc: "Hands-on training in daily living skills, financial literacy, cooking, and self-care to build independence.",
  },
  {
    icon: MapPin,
    title: "Community Integration",
    desc: "Supporting meaningful participation in community events, recreation, and social activities.",
  },
  {
    icon: HeartHandshake,
    title: "Family Support",
    desc: "Resources, respite care, and guidance for families navigating disability services and support systems.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#6b8e5e]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            What We Offer
          </span>
          <h2
            className="text-[#2d2545] mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Comprehensive Support Services
          </h2>
          <p
            className="text-[#5a5475]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 400 }}
          >
            We provide a wide range of services designed to meet the unique
            needs of each individual we serve, empowering them toward greater
            independence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-[#faf9f7] rounded-2xl p-7 lg:p-8 hover:bg-white hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-[#e8e4df]"
            >
              {/* Number accent */}
              <span
                className="absolute top-5 right-6 text-[#2d2545]/5"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}
              >
                0{i + 1}
              </span>

              <div className="w-12 h-12 bg-[#6b8e5e]/8 border border-[#6b8e5e]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#6b8e5e] group-hover:border-[#6b8e5e] transition-all duration-400">
                <s.icon
                  size={24}
                  className="text-[#6b8e5e] group-hover:text-white transition-colors duration-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="text-[#2d2545] mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
              >
                {s.title}
              </h3>
              <p
                className="text-[#7a7494]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 400 }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}