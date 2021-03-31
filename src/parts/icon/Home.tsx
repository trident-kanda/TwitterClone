import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
type props = {
  color: string;
};

const useStyles = makeStyles({
  color: {
    display: "none",
    "@media (min-width: 1000px)": {
      display: "inline",
      color: (props: any) => props.color,
      textDecoration: "none",
    },
  },
});

const Home = (props: props) => {
  const classes = useStyles(props);
  return (
    <li className="nav_li">
      <Link to={"/"} style={{ color: props.color }}>
        <HomeIcon fontSize="large" style={{ color: props.color }} />
        <p className={classes.color}>ホーム</p>
      </Link>
    </li>
  );
};

export default Home;
