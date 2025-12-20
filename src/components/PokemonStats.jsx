import React, { useEffect, useRef, useState } from "react";

const MAX_STAT = 255;

const statLabels = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

const statColors = {
  hp: "bg-red-500",
  attack: "bg-orange-500",
  defense: "bg-yellow-500",
  "special-attack": "bg-blue-500",
  "special-defense": "bg-green-500",
  speed: "bg-pink-500",
};

const PokemonStats = ({ stats }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Stats</h2>

      <div className="grid grid-cols-6 gap-6 items-end">
        {stats.map((stat) => {
          const percent = Math.round(
            (stat.base_stat / MAX_STAT) * 100
          );

          return (
            <div
              key={stat.stat.name}
              className="flex flex-col items-center"
            >
              {/* Bar container */}
              <div className="h-40 w-4 bg-base-300 rounded overflow-hidden relative">
                <div
                  className={`absolute bottom-0 w-full rounded transition-all duration-1000 ease-out ${
                    statColors[stat.stat.name]
                  }`}
                  style={{
                    height: visible ? `${percent}%` : "0%",
                  }}
                />
              </div>

              {/* Label */}
              <span className="mt-2 text-sm font-semibold">
                {statLabels[stat.stat.name]}
              </span>

              {/* Value */}
              <span className="text-xs opacity-70">
                {stat.base_stat}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStats;
