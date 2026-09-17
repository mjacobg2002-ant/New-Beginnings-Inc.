import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";

/**
 * On navigation: scroll to the hash target (e.g. /#resources) if present,
 * otherwise scroll to the top of the page.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted before scrolling.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge/:slug" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
