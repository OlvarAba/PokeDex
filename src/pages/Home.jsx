import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(() => {
        const storedOffset = sessionStorage.getItem("Offset");
        return storedOffset ? parseInt(storedOffset, 10) : 0;
    });

    useEffect(() => {
        async function fetchPokemons() {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;

            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
        }
        fetchPokemons();
    }, [offset]);

    
    return (
        <div className="Home">
            <Header />
            <Feed pokemons={pokemons} />
            <div className="pagination flex justify-center gap-10 my-8">
                <button className="btn btn-soft btn-primary">Previous</button>
                <button className="btn btn-soft btn-primary">Next</button>
            </div>
        </div>
    )
}

export default Home