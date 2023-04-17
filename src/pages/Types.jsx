import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import Icon from "../components/Icon";
import Loading from "../components/Loading";
import Title from "../components/Title";
import TypesContext from "../context/TypesContext";
import { defaultGlobal } from "../context/dataGlobal";

import "../styles/Types.css"

const Types = () => {

  const { types } = useContext(TypesContext);

  const { localTypes } = defaultGlobal;

  if (!types.length) return <Loading middle />;

  return (
    <>
      <Title text="Select your favorite type...">
        <img src={logo} alt="Logo Pokémon" className="image-types" />
      </Title>
      <ul className="ul-types">
        {types &&
          types.map((type) => (
            <Link to={`/${type}`} key={type}>
              <li
                key={type}
                className="li-types"
                style={{ background: "#fafafa" }}
              >
                <Icon
                  bg={localTypes[type].bg}
                  size="big"
                  name={type}
                  img={localTypes[type].img}
                  key={type}
                  text={type}
                  skeleton
                  hover
                />
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Types;
