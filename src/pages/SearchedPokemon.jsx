import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Button from "../components/Button";
import PokemonCard from "../components/PokemonCard";

const SearchedPokemon = () => {
  const { name } = useParams(); // <-- fixed here
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`; // <-- fixed here

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
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
          className="mx-auto mt-4"
        />
        {/* Add more Pokémon info here */}
      </div>
    </div>
  );
};

export default SearchedPokemon;
