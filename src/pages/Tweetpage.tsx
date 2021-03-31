import React, { useCallback, useEffect, useState } from "react";
import { postTweet } from "../exportjs/ajax";
import PrimaryButton from "../parts/PrimaryButton";
import TweetArea from "../parts/TweetArea";

const Tweetpage = (props: any) => {
  const [text, setText] = useState("");
  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  const clickBtn = useCallback(() => {
    setText("");
  }, []);
  useEffect(() => {
    props.change("Tweet");
  }, []);

  return (
    <>
      <h1>Tweet</h1>
      <TweetArea onChange={inputText} value={text} />
      <div className="space"></div>
      <PrimaryButton
        label={"投稿"}
        onClick={() => {
          postTweet(text);
          clickBtn();
        }}
        width={256}
      />
    </>
  );
};

export default Tweetpage;
