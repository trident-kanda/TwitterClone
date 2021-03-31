import React, { useState, useEffect } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
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

const User = (props: props) => {
  const classes = useStyles(props);
  return (
    <li className="nav_li">
      <Link to={"/userpage"} style={{ color: props.color }}>
        <PersonOutlineIcon fontSize="large" style={{ color: props.color }} />
        <p className={classes.color}>ユーザーページ</p>
      </Link>
    </li>
  );
};

export default User;
