import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EvolutionChain = ({ speciesUrl }) => {
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvolutionChain() {
      try {
        // 1️⃣ Fetch species data
        const speciesRes = await fetch(speciesUrl);
        const speciesData = await speciesRes.json();

        // 2️⃣ Fetch evolution chain
        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        // 3️⃣ Parse evolution chain recursively
        const evoArray = [];
        let current = evoData.chain;

        while (current) {
          evoArray.push({
            name: current.species.name,
            url: current.species.url,
          });

          current = current.evolves_to[0];
        }

        setEvolutions(evoArray);
      } catch (error) {
        console.error("Failed to load evolution chain", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvolutionChain();
  }, [speciesUrl]);

  if (loading) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Evolution Chain
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {evolutions.map((pokemon, index) => {
          const id = pokemon.url.split("/").slice(-2, -1)[0];
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <Link
              to={`/pokemon/${pokemon.name}`}
              key={pokemon.name}
              className="group"
            >
              <div className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition">
                <figure>
                  <img
                    src={imgUrl}
                    alt={pokemon.name}
                    className="w-40 group-hover:scale-105 transition-transform"
                  />
                </figure>
                <div className="card-body items-center p-2">
                  <h3 className="capitalize font-bold text-lg">
                    {pokemon.name}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EvolutionChain;
