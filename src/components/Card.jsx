import React from "react";

const Card = ({ data }) => {
    console.log(data);

    const urlParts = data.url.split('/');
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
    return (
       <div className="pokemon-card">
       <div className="card flex flex-col items-center p-4 transition-shadow duration-300">
            <img src={imgUrl} alt={data.name} 
            width="100"
            height="100"
            />
            <div className="text">
                <h4 className="name font-bold text-center">
                    <span className="pokeId m-2">{pokeId} .</span>
                    {data.name}
                </h4>
            </div>
        </div>
       </div>
    )
}

export default Card