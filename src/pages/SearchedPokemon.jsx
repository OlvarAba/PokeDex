import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Button from "../components/Button";
import PokemonStats from "../components/PokemonStats";
import EvolutionChain from "../components/EvolutionChain";



const SearchedPokemon = () => {
  const { name } = useParams(); 
  const [description, setDescription] = useState("");
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
        const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      const englishEntry = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );

      setDescription(
        englishEntry
          ? englishEntry.flavor_text.replace(/\f|\n/g, " ")
          : "No description available."
      );
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
        <div className="flex flex-col items-center mt-20 space-y-6">
      <p className="text-center text-2xl font-bold mt-20">
        An error occurred while fetching the Pokémon data.
      </p>
      <Link to="/">
        <Button label="Back to Home" />
      </Link>
     </div>
    );

  return (
    <div className="searched-pokemon p-4">
      <div className="searched-pokemon-header mb-4">
        <Link to="/">
          <Button label="Back" />
        </Link>
       
      </div>

      <div className="pokemon-details text-center">
        <h1 className="text-4xl font-bold capitalize text-shadow-lg">{selectedPokemon.name}</h1>
        <img
          src={selectedPokemon.sprites.other['official-artwork'].front_default}
          alt={selectedPokemon.name}
          width={300}
            height={300}
          className="mx-auto mt-4 hover:scale-105 transition-transform duration-300"
        />
        <div className="description p-6 mt-10 italic text-sm rounded-xl glass">
            {description}
        </div>
        <div className="info">
            <p className="text-xl mt-4 font-medium pb-4">
            Height: {selectedPokemon.height / 10} m | Weight: {selectedPokemon.weight / 10} kg
            </p> 
        </div>
        
         <div className="type">
            {selectedPokemon.types.map((type, index) => (
              <span
                key={index}
                className={`badge m-2 p-4 text-xl capitalize text-white rounded-xl ${
                            colors[type.type.name] || "bg-gray-400"
                        }`}
              >
                {type.type.name}
              </span>
            ))}
         </div>
         <div className="Pokemon-Stats bg-gray-100/10 rounded-lg p-2 mt-10 shadow-lg glass">
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
