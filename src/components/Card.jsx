import React from "react";

const Card = ({ data }) => {
    console.log(data);

    const urlParts = data.url.split('/');
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;

    return (
       <div className="pokemon-card card  hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
       <div className="card flex flex-col items-center p-4 transition-shadow duration-300">
            <img src={imgUrl} alt={data.name} 
            width="300"
            />
            
            <div className="text">
                <h4 className="name font-bold text-center text-2xl text-primary capitalize">
                    {data.name}
                </h4>
            </div>
        </div>
       </div>
    )
}

export default Card