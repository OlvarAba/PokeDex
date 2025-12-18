import React from "react";
import logo from '../assets/Pokemon_Logo.png';
import Button from '../components/Button.jsx';


const Header = () => {
    return (
        <div className="Home">
            <header className="fixed flex top-4 left-1/2 -translate-x-1/2 p-4">
                <nav className="flex items-center justify-between gap-4 bg-[#313131] p-4 rounded-xl">
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