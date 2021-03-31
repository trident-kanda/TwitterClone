import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
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

const Search = (props: props) => {
  const classes = useStyles(props);
  return (
    <li className="nav_li">
      <Link to={"/search"}>
        <SearchIcon fontSize="large" style={{ color: props.color }} />
        <p className={classes.color}>検索</p>
      </Link>
    </li>
  );
};

export default Search;
