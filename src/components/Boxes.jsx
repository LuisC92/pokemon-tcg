import React from "react";
import { createUseStyles } from "react-jss";
import Icon from "./Icon";
import { defaultGlobal } from "../context/dataGlobal";

const useStyles = createUseStyles({
  text: {
    color: "#7b8188",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
});

const Boxes = ({ boxes }) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      {boxes.map((box, index) => (
        <div key={index}>
          {box.img && (
            <Icon
              bg={box.bg}
              size={box.size}
              name={box.name}
              img={box.img}
            />
          )}
          {box.text && <span className={classes.text}>{box.text}</span>}
        </div>
      ))}
    </div>
  );
};

export default Boxes;
