import React, { useEffect, useState } from "react";
import { getTweet } from "../exportjs/ajax";
import Tweet from "../parts/Tweet";
const Homepage = (props: any) => {
  const [tweetlist, setTweetlist] = useState([]);
  const getTweets = async () => {
    const tweet = await getTweet();
    if (tweet !== null) {
      setTweetlist(tweet);
    }
  };
  useEffect(() => {
    props.change("Home");
    getTweets();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <div>{tweetlist.length > 0 && <Tweet array={tweetlist} />}</div>
    </>
  );
};

export default Homepage;
