import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchedPokemon from "./pages/SearchedPokemon";
import ThemeToggle from "./components/ThemeToggle";


const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content scroll-smooth transition-colors duration-300 bg-fixed bg-cover bg-center "
    
    >
      
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<SearchedPokemon />} />
        </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
