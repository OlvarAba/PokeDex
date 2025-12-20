import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Button from "../components/Button";
import PokemonStats from "../components/PokemonStats";
import EvolutionChain from "../components/EvolutionChain";


const SearchedPokemon = () => {
  const { name } = useParams(); // <-- fixed here
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Colors
  const colors = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-500",
    psychic: "bg-purple-500",
    ice: "bg-cyan-500",
    dragon: "bg-indigo-500",
    dark: "bg-gray-800",
    fairy: "bg-pink-500",
    normal: "bg-gray-400",
    fighting: "bg-orange-500",
    flying: "bg-sky-300",
    poison: "bg-violet-500",
    ground: "bg-yellow-700",
    rock: "bg-gray-600",
    bug: "bg-lime-500",
    ghost: "bg-purple-800",
    steel: "bg-gray-500",  
  };

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`; 

    async function fetchPokemon() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("An error occurred :(");
        }

        const data = await response.json();
        setSelectedPokemon(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [name]);

  if (loading) return <LoadingScreen />;
  if (error)
    return (
      <p className="text-center text-2xl font-bold mt-20">
        An error occurred while fetching the Pokémon data.
      </p>
    );

  return (
    <div className="searched-pokemon p-4">
      <div className="searched-pokemon-header mb-4">
        <Link to="/">
          <Button label="Back" />
        </Link>
      </div>

      <div className="pokemon-details text-center">
        <h1 className="text-3xl font-bold capitalize">{selectedPokemon.name}</h1>
        <img
          src={selectedPokemon.sprites.other['official-artwork'].front_default}
          alt={selectedPokemon.name}
          width={300}
            height={300}
          className="mx-auto mt-4 hover:scale-105 transition-transform duration-300"
        />
         <div className="type">
            {selectedPokemon.types.map((type, index) => (
              <span
                key={index}
                className={`badge m-2 p-4 text-xl capitalize text-white ${
                            colors[type.type.name] || "bg-gray-400"
                        }`}
              >
                {type.type.name}
              </span>
            ))}
         </div>
         <div className="Pokemon-Stats">
            <PokemonStats stats={selectedPokemon.stats} />
         </div>
            <div className="Evolution-Chain">
            <EvolutionChain speciesUrl={selectedPokemon.species.url} />
            </div>
         
      </div>
    </div>
  );
};

export default SearchedPokemon;
