import React from "react";

const Card = ({ data }) => {
    return (
       <div className="pokemon-card">
       <div className="card flex flex-col items-center p-4 transition-shadow duration-300">
            <img src="https://img.pokemondb.net/sprites/home/normal/1x/bulbasaur.png" alt="Bulbasaur" 
            width="100"
            height="100"
            />
            <div className="text">
                <h4 className="name font-bold text-center">
                    <span className="pokeId m-2">1.</span>Bulbasuar
                </h4>
            </div>
        </div>
       </div>
    )
}

export default Card