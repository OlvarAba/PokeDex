import React from "react";
import logo from '../assets/Pokemon_Logo.png';
import Button from '../components/Button.jsx';


const Header = () => {
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
                        className="input input-sm shadow-lg outline dark:shadow-none dark:-outline-offset-2 dark:outline-white/10" />
                        <Button label={"Search"}/>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header