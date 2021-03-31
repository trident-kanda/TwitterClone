import React, { useCallback, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { follow, unfollow } from "../exportjs/ajax";
const followStyles = makeStyles({
  button: {
    backgroundColor: "#00acee",
    color: "#fff",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 150,
  },
});
const unfollowStyles = makeStyles({
  button: {
    backgroundColor: "#fff",
    color: "#00acee",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 150,
  },
});
type props = {
  label: string;
  uid: string;
  state: boolean;
};
const FollowButton = (props: props) => {
  const unfollowClasses = unfollowStyles();
  const followClasses = followStyles();
  const [label, setLabel] = useState(props.label);
  const [classes, setclasses] = useState(followClasses);
  let state = props.state;
  useEffect(() => {
    if (!state) {
      setclasses(unfollowClasses);
    }
  }, []);
  const clickBtn = useCallback(() => {
    if (state) {
      state = !state;
      setLabel("フォロー");
      setclasses(unfollowClasses);
      unfollow(props.uid);
    } else {
      state = !state;
      setLabel("フォロー中");
      setclasses(followClasses);
      follow(props.uid);
    }
  }, []);
  return (
    <div className="follow_btn">
      <Button variant="contained" className={classes.button} onClick={clickBtn}>
        {label}
      </Button>
    </div>
  );
};

export default FollowButton;
