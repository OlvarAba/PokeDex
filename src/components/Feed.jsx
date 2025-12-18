import React from "react";
import Card from "./Card";

const Feed = ({ pokemons }) => {
  return (
    <section className="pokemon-feed flex justify-center mt-32 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl cursor-pointer">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} data={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
