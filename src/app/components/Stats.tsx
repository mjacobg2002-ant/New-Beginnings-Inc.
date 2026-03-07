import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Families Served" },
  { value: 18, suffix: "+", label: "Years of Service" },
  { value: 95, suffix: "%", label: "Family Satisfaction" },
  { value: 120, suffix: "+", label: "Trained Professionals" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 lg:py-14 bg-white border-b border-[#eae7e2]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-[#eae7e2]" : ""}`}>
              <p
                className="text-[#2d2545] mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1 }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p
                className="text-[#7a7494]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
