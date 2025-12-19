import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(() => {
        const storedOffset = sessionStorage.getItem("Offset");
        return storedOffset ? parseInt(storedOffset, 10) : 0;
    });
    
    const [loading, setLoading] = useState(true);


    function handleNextPage() {
        const newOffset = offset + 50;
        setOffset(newOffset);
        sessionStorage.setItem("offset", newOffset.toString
            ());
    }

    function handlePreviousPage() {
        const newOffSet = offset <= 50 ? 0 : offset - 50;
        setOffset(newOffSet);
        sessionStorage.setItem("offset", newOffSet.toString
            ());
    }

    useEffect(() => {
        async function fetchPokemons() {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;

            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }

        fetchPokemons();
    }, [offset]);

    useEffect(() => {
        setLoading(true);
    }, [offset]);
 
    
    return (
        <div className="Home maxWidth pt-24">
            {loading && <LoadingScreen />}
           {!loading && (
            <>
             <Header />
            <Feed pokemons={pokemons} />
            <div className="pagination flex justify-center gap-10 my-8">
                <button onClick={handlePreviousPage} className="btn btn-soft btn-primary">Previous</button>
                <button onClick={handleNextPage} className="btn btn-soft btn-primary">Next</button>
            </div>
            </>
           )}
        </div>
    )
}

export default Home