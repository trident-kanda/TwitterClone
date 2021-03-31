import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "#00acee",
  },
});
const Backbutton = () => {
  const classes = useStyles();
  const history = useHistory();
  const pageReturn = () => {
    history.goBack();
  };
  return (
    <div>
      <IconButton onClick={pageReturn}>
        <ArrowBackIosIcon className={classes.button} />
      </IconButton>
    </div>
  );
};

export default Backbutton;
