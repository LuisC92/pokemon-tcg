import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TypesContext = createContext();
export default TypesContext;

export const TypesContextProvider = (  {children}) => {

const [types, setTypes] = useState([])
const [loading, setLoading] = useState(false)

const getTypes = async () => {
    setLoading(true)
  try {
    const { data } = await axios.get('https://api.pokemontcg.io/v1/types');
    // console.log(data.types)
    setTypes(data.types);
    setLoading(false);
  } catch (err) {
    console.error(err);
  }
};
useEffect(() => {
    getTypes();
  }, []);

    return(
        <TypesContext.Provider value={{types}}>
            {children}
        </TypesContext.Provider>
    )
}
