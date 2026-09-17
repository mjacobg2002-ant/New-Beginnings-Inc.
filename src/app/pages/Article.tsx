import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, Clock, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { articles, getArticle } from "../data/articles";

export function Article() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <>
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center bg-[#faf9f7] px-6 pt-24">
          <div className="text-center max-w-md">
            <h1
              className="text-[#2d2545] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
            >
              Article not found
            </h1>
            <p className="text-[#5a5475] mb-8" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              The resource you're looking for may have moved. Explore our Knowledge Center for more helpful guides.
            </p>
            <Link
              to="/#resources"
              className="inline-flex items-center gap-2 bg-[#6b8e5e] text-white px-7 py-3 rounded-full hover:bg-[#5a7d4e] transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
            >
              <ArrowLeft size={16} /> Back to Knowledge Center
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <header className="bg-[#2d2545] pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <Link
            to="/#resources"
            className="inline-flex items-center gap-2 text-[#a8d98a] hover:text-white transition-colors mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.85rem" }}
          >
            <ArrowLeft size={16} /> Knowledge Center
          </Link>
          <div className="mb-5">
            <span
              className="bg-[#6b8e5e] text-white px-3.5 py-1.5 rounded-full"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              {article.tag}
            </span>
          </div>
          <h1
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            {article.title}
          </h1>
          <div
            className="flex items-center gap-4 text-white/60"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
          >
            <span>{article.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className="bg-[#2d2545]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden -mb-16 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="bg-white pt-28 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <p
            className="text-[#2d2545] mb-10"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            {article.intro}
          </p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2
                className="text-[#2d2545] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#5a5475] mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 400 }}
                >
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check size={18} className="text-[#6b8e5e] flex-shrink-0 mt-1" />
                      <span
                        className="text-[#5a5475]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Key takeaways */}
          <div className="bg-[#faf9f7] border border-[#eae7e2] rounded-2xl p-7 lg:p-8 mt-12">
            <h3
              className="text-[#2d2545] mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700 }}
            >
              Key takeaways
            </h3>
            <ul className="space-y-3">
              {article.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6b8e5e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span
                    className="text-[#5a5475]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-[#faf9f7] py-16 lg:py-20 border-t border-[#eae7e2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2
            className="text-[#2d2545] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700 }}
          >
            More from the Knowledge Center
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {related.map((a) => (
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
                </div>
                <div className="p-6">
                  <h3
                    className="text-[#2d2545] mb-2 group-hover:text-[#6b8e5e] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.4 }}
                  >
                    {a.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-2 text-[#6b8e5e] group-hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    Read More <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
