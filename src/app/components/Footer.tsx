import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#1e1833] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <div className="flex flex-col">
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.2 }}>
                  New Beginnings
                </span>
                <span
                  className="text-[#a8d98a]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  Support Services
                </span>
              </div>
            </div>
            <p
              className="text-white/45 mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 400 }}
            >
              Empowering individuals with intellectual and developmental
              disabilities to live fulfilling, independent lives.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Support",
                "Supported Employment",
                "Day Programs",
                "Life Skills Training",
                "Community Integration",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-[#a8d98a] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                "Understanding IDD",
                "Employment Programs",
                "Choosing a Program",
                "Family Support",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#resources"
                    className="text-white/45 hover:text-[#a8d98a] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                "123 Community Drive, Suite 100",
                "(410) 597-8092",
                "info@newbeginnings.org",
                "Mon – Fri: 8am – 5pm",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/45"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 400 }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/30"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
          >
            &copy; 2026 New Beginnings. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
