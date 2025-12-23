import React, { useState } from "react";
import logo from '../assets/Pokemon_Logo.png';
import Button from '../components/Button.jsx';
import { Link } from "react-router-dom";


const Header = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="Home">
            <header className="sticky top-4 z-50 flex justify-center">
                <nav className=" glass flex items-center justify-between gap-4  p-4 rounded-xl h-30 max-w-4xl w-full shadow-lg">
                    <img src={logo} alt="Pokedex"
                    className="w-50" />
                    <div className="search-container flex items-center gap-2">
                        <input 
                        type="text" 
                        placeholder="Search by name or number"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="input input-sm shadow-lg outline dark:shadow-none dark:-outline-offset-2 dark:outline-white/10" />
                        <Link to={`/pokemon/${query}`}>
                        <Button label={"Search"}/>
                        </Link>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header