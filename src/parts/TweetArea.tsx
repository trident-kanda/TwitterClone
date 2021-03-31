import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
type props = {
  value: string;
  onChange: (event: any) => void;
};
const TweetArea = (props: props) => {
  const classes = useStyles();
  return (
    <TextField
      label="ツイート"
      multiline
      rows={4}
      value={props.value}
      variant="outlined"
      onChange={props.onChange}
      className={classes.root}
    />
  );
};

export default TweetArea;
