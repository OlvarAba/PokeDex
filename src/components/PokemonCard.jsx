const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card card-hover bg-base-100 shadow-xl mx-auto max-w-sm">
      <figure className="bg-base-200 p-6">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-48 h-48"
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title justify-center capitalize">
          {pokemon.name}
        </h2>

        <div className="flex justify-center gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="badge badge-outline capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="mt-4 text-sm opacity-80">
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
