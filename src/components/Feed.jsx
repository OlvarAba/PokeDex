import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Feed = ({ pokemons }) => {
  return (
   <section className="pokemon-feed">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl pt-20 mx-auto bg-base-200/60 p-6 rounded-lg shadow-lg">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <Card data={pokemon} />
          </Link>
        ))}
      </div>
   </section>
  );
};

export default Feed;
