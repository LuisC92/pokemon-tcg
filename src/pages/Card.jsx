import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Img } from "react-image";
import Skeleton from "react-loading-skeleton";

import { defaultGlobal, powers } from "../context/dataGlobal";
import Loading from "../components/Loading";
import Icon from "../components/Icon";
import Title from "../components/Title";
import CustomContainer from "../components/CustomContainer";
import H3 from "../components/H3";
import Boxes from "../components/Boxes";
import CardAttacks from "../components/CardAttacks";
import CardDescription from "../components/CardDescription";

import "../styles/Card.css";

const Card = () => {
  const [card, setCard] = useState();
  const [loading, setLoading] = useState(false);

  const { id, type } = useParams();
  const navigate = useNavigate();

  const { localTypes } = defaultGlobal;

  const getCardById = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v1/cards/${id}`
      );
      setCard(data.card);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!id || !type) {
      navigate("/error404");
    } else if (!id && type) {
      navigate(`/${type}`);
    } else {
      getCardById();
    }
  }, [id]);

  if (!card) return <Loading color={localTypes[type]?.bg} middle />;
//   console.log(card);

  return card ? (
    <div className="container-card">
      <Title
        title={`${card.name} #${card.nationalPokedexNumber}`}
        subtitle={`Pokemon - ${card.subtype}`}
      >
        <Icon
          size="medium"
          name={card.name}
          img={
            `https://veekun.com/dex/media/pokemon/dream-world/${card.nationalPokedexNumber}.svg` ||
            null
          }
        />
        <Icon
          text={type ? `${type}` : "Unknown"}
          bg={localTypes[type].bg}
          size="small"
          name={type}
          img={localTypes[type].img}
        />
      </Title>
      <div className="row-card">
        <div className="elements-left">
          <Img src={card.imageUrlHiRes} loader={<Skeleton />} alt={card.name} />
        </div>
        <div className="elements-right">
          {card.ability && (
            <CardDescription
              data={{
                title: card.ability.name,
                type: card.ability.type,
                color: powers[card.ability.type],
                text: [card.ability.text],
              }}
            />
          )}
          {card.attacks && (
            <CardAttacks
              data={{
                attacks: card.attacks,
                title: card.attacks.length > 1 ? "Attacks" : "Attack",
              }}
            />
          )}
          <CustomContainer alignItems={"stretch"}>
            {card.weaknesses && (
              <div className="data-boxes">
                <H3 text={"Weaknesses"} />
                <Boxes
                  boxes={[
                    {
                      bg: localTypes[card.weaknesses[0].type].bg,
                      img: localTypes[card.weaknesses[0].type].img,
                      name: card.weaknesses[0].type,
                      size: "xsmall",
                      text: card.weaknesses[0].value,
                    },
                  ]}
                />
              </div>
            )}
            {card.resistances && (
              <div className="data-boxes">
                <H3 text={"Resistances"} />
                <Boxes
                  boxes={[
                    {
                      bg: localTypes[card.resistances[0].type].bg,
                      img: localTypes[card.resistances[0].type].img,
                      name: card.resistances[0].type,
                      size: "xsmall",
                      text: card.resistances[0].value,
                    },
                  ]}
                />
              </div>
            )}
            {card?.retreatCost && (
              <div className="data-boxes">
                <H3 text={"Retreat Cost"} />
                <div className="retreatCost-container">
                  {card.retreatCost.map((cost, index) => (
                    <Fragment key={index}>
                        <Boxes
                          boxes={[
                            {
                              bg: localTypes[cost].bg,
                              img: localTypes[cost].img,
                              name: cost,
                              size: "xsmall",
                              text: null,
                            },
                          ]}
                        />
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
            {card.artist && (
              <div className="data-boxes">
                <H3 text={"Artist"} />
                <Boxes
                  boxes={[
                    {
                      bg: null,
                      img: null,
                      name: null,
                      size: "small",
                      text: card.artist,
                    },
                  ]}
                />
              </div>
            )}
            {card.series && (
              <div className="data-boxes">
                <H3 text={"Series"} />
                <Boxes
                  boxes={[
                    {
                      bg: null,
                      img: null,
                      name: null,
                      size: "xsmall",
                      text: card.series,
                    },
                  ]}
                />
              </div>
            )}
            {card.set && (
              <div className="data-boxes">
                <H3 text={"Set"} />
                <Boxes
                  boxes={[
                    {
                      bg: null,
                      img: null,
                      name: null,
                      size: "xsmall",
                      text: `${card.set} (${card.setCode})`,
                    },
                  ]}
                />
              </div>
            )}
          </CustomContainer>
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
