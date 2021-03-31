import React, { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
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

const Send = (props: props) => {
  const classes = useStyles(props);
  return (
    <li className="nav_li">
      <Link to={"/tweet"} style={{ color: props.color }}>
        <SendIcon fontSize="large" style={{ color: props.color }} />
        <p className={classes.color}>投稿</p>
      </Link>
    </li>
  );
};

export default Send;
