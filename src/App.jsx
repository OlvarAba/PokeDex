import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchedPokemon from "./pages/SearchedPokemon";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content scroll-smooth transition-colors duration-300">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<SearchedPokemon />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
