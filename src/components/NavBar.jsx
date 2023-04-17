// your imports goes here
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    navBar: {
        width: "100%",
        height: "70px",
        backgroundColor: "#000",
        display: "flex",
        flexFlow: "row wrap",
        "& ul": {
            width: "100%",
            listStyleType: "none",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
            textAlign: "center",
            alignItems: "center",
      }
    },
    list:{
        margin: "0 auto",
        "& a ":{
            textDecoration: "none",
            color: "#fff",
        }
    }
})

function NavBar() {
  // your variables goes here
  const classes = useStyles();
  return (
    <div>
      {/* JSX here */}
      <nav className={classes.navBar}>
        <ul className={classes.list}>
          <Link to="/">
            <li>Homepage</li>
          </Link>
          <Link to="/select-a-type">
            {" "}
            <li>Select a Type</li>
          </Link>
          <Link to="/error404">
            <li>Error 404</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
