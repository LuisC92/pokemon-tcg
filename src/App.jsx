import { Routes, Route } from "react-router-dom";

import Error404 from "./pages/Error404";
import Types from "./pages/Types";
import Cards from "./pages/Cards";
import Card from "./pages/Card";
import HomePage from "./pages/HomePage";
import { TypesContextProvider } from "./context/TypesContext";
import { PokemonContextProvider } from "./context/PokemonContext";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {


  return (
    <div className="App">
      <TypesContextProvider>
        <PokemonContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select-a-type" element={<Types />} />
            <Route path="/:type" element={<Cards />} />
            <Route path="/:type/:id" element={<Card />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </PokemonContextProvider>
      </TypesContextProvider>
    </div>
  );
}

export default App;
