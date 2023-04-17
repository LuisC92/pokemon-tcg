import React from "react";
import { createUseStyles } from "react-jss";

import H1 from "./H1";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column wrap",
    justifyContent: "center",
    maxWidth: "1440px",
    padding: 0,
    margin: "20px auto",
	backgroundColor:"#FAFAFA",
	width: "100%",
  },
  hr: {
    width: "100%",
    border: "none",
    display: "block",
    height: "1px",
    margin: "1rem 0",
    backgroundColor: "#f5f5f5",
  },
  children: {
    display: "flex",
    alignItems: "center",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
});

const Title = ({ children, title = "", subtitle = "", text = "", color }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children.length === undefined ? children : null}
      {title && <H1 text={title} color={color} />}
      {subtitle && <H2 text={subtitle} width="" />}
      {text && <Paragraph text={text} />}
      {children.length !== undefined ? (
        <div className={classes.children}>{children}</div>
      ) : null}
      <hr className={classes.hr} />
    </div>
  );
};

export default Title;
