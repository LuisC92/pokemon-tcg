import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const PokemonContext = createContext();
export default PokemonContext;

export const PokemonContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [initialCards, setInitialCards] = useState([]);

  const getInitialCards = async () => {
    try {
      const { data } = await axios.get(
        "https://api.pokemontcg.io/v1/cards"
      );
      setInitialCards(data.cards);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInitialCards();
  }, []);

  return (
    <PokemonContext.Provider value={{ initialCards, cards, setCards }}>
      {children}
    </PokemonContext.Provider>
  );
};
