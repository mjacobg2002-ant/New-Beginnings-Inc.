import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Services", "Events", "Resources", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="New Beginnings Logo"
              className="w-11 h-11 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`transition-colors duration-500 ${scrolled || mobileOpen ? "text-[#2d2545]" : "text-white"}`}
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.2 }}
              >
                New Beginnings
              </span>
              <span
                className={`hidden sm:block transition-colors duration-500 ${scrolled || mobileOpen ? "text-[#6b8e5e]" : "text-[#a8d98a]"}`}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Support Services
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase()}`}
                className={`relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#6b8e5e] after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled || mobileOpen
                    ? "text-[#4a3f5c] hover:text-[#6b8e5e]"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem", letterSpacing: "0.02em" }}
              >
                {link}
              </Link>
            ))}
            <Link
              to="/#contact"
              className={`px-7 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-px ${
                scrolled || mobileOpen
                  ? "bg-[#6b8e5e] text-white hover:bg-[#5a7d4e]"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.02em" }}
            >
              Get Started
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || mobileOpen ? "text-[#2d2545]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100/80 px-5 py-6 space-y-1 shadow-xl">
          {links.map((link) => (
            <Link
              key={link}
              to={`/#${link.toLowerCase()}`}
              className="block text-[#2d2545] py-3 px-4 rounded-xl hover:bg-[#f5f3f0] hover:text-[#6b8e5e] transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "1rem" }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/#contact"
              className="block text-center bg-[#6b8e5e] text-white px-6 py-3.5 rounded-full hover:bg-[#5a7d4e] transition-all shadow-md"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
