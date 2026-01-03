import { useState, useEffect } from "react";

import "./ModsSection.css";
import CarouselCard from "./CarouselCard";

export default function ModCarousel({ title, initialMods }) {
  const [mods, setMods] = useState(initialMods || []);
  const [current, setCurrent] = useState(0);
  const total = mods.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  useEffect(() => {
    async function fetchStats(mod) {
      // Skip if already has stats
      if (mod.stats) return;

      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/steam/${mod.id}`
        );
        const data = await res.json();
        setMods((prevMods) =>
          prevMods.map((m) => (m.id === mod.id ? { ...m, stats: data } : m))
        );
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    }

    initialMods.forEach(fetchStats);
  }, [initialMods]);

  return (
    <div className="mod-carousel-section">
      <div className="container">
        <h3>{title}</h3>
        <div className="carousel-wrapper">
          <div className="carousel">
            {mods.map((mod, index) => {
              const offset = index - current;

              if (offset < -1 || offset > 1) return null;

              return <CarouselCard key={mod.id} mod={mod} offset={offset} />;
            })}
          </div>
          <button className="carousel-btn left" onClick={prev}>
            {" "}
            ‹{" "}
          </button>
          <button className="carousel-btn right" onClick={next}>
            {" "}
            ›{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
