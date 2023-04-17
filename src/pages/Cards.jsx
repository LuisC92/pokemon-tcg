import React, { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Img } from "react-image";
import axios from "axios";

import Icon from "../components/Icon";
import Loading from "../components/Loading";
import Title from "../components/Title";
import { defaultGlobal } from "../context/dataGlobal";
import PokemonContext from "../context/PokemonContext";

import "../styles/Cards.css"

const Cards = () => {
  const [loading, setLoading] = useState(false);
  
  const { localTypes } = defaultGlobal;

  const { cards, setCards } = useContext(PokemonContext);

  const { type } = useParams();
  const navigate = useNavigate();


  const getCardsByType = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v1/cards?types=${type}`
      );
      setCards(data.cards);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!localTypes[type]) {
      navigate("/error404");
    } else {
      getCardsByType();
    }
  }, []);

  if (!cards.length || loading)
    return <Loading color={localTypes[type]?.bg} middle />;

  return (
    <>
      <Title
        title={`${type} type Pokémon`}
        text="Select your favorite Pokémon..."
        color={localTypes[type].bg}
      >
        <Icon
          bg={localTypes[type].bg}
          size="medium"
          name={type}
          img={localTypes[type].img}
        />
      </Title>
      <ul className="ul-list-cards">
        {cards.map(({ id, name, imageUrl }) => (
          <Link to={`/${type}/${id}`} key={id}>
            <li key={name} className="li-element-cards">
              <Img
                src={imageUrl}
                loader={<Skeleton />}
                alt={name}
                className="img-cards"
              />
            </li>
          </Link>
        ))} 
      </ul>
    </>
  );
};

export default Cards;
