import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  button: {
    backgroundColor: "#00acee",
    color: "#fff",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: (props: any) => props.width,
  },
});

type props = {
  onClick: (event: any) => void;
  label: string;
  width: number;
};
const PrimaryButton = (props: props) => {
  const classes = useStyles(props);
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
