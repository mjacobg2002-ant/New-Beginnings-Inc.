import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { articles } from "../data/articles";

export function Resources() {
  return (
    <section id="resources" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#6b8e5e]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Knowledge Center
          </span>
          <h2
            className="text-[#2d2545] mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Helpful Resources for Families & Caregivers
          </h2>
          <p
            className="text-[#5a5475]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 400 }}
          >
            Access educational guides, articles, and resources designed to help
            families better understand intellectual and developmental disability
            support programs and available community services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((a) => (
            <Link
              to={`/knowledge/${a.slug}`}
              key={a.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-[#eae7e2] hover:border-[#d5d0c8] block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-white/90 backdrop-blur-sm text-[#2d2545] px-3.5 py-1.5 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {a.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                {/* Read time */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Clock size={13} className="text-[#7a7494]" />
                  <span
                    className="text-[#7a7494]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                  >
                    {a.readTime}
                  </span>
                </div>

                <h3
                  className="text-[#2d2545] mb-2 group-hover:text-[#6b8e5e] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.4 }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-[#7a7494] mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 400 }}
                >
                  {a.desc}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[#6b8e5e] group-hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.02em" }}
                >
                  Read More <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}