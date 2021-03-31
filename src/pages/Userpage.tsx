import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getFolloweruidname,
  getFollowuidname,
  getMytweet,
} from "../exportjs/ajax";
import Tweet from "../parts/Tweet";
type array = {
  0: string;
  1: string;
  name: string;
  uid: string;
}[];
const Userpage = (props: any) => {
  const [tweetlist, setTweetlist] = useState([]);
  const [follow, setfollow] = useState(0);
  const [follower, setfollower] = useState(0);
  const getData = async () => {
    const tweet = await getMytweet();
    if (tweet !== null) {
      setTweetlist(tweet);
    }
    const followlist: array = await getFollowuidname();
    const followerlist: array = await getFolloweruidname();
    if (followlist !== null) {
      const length = followlist.length;
      setfollow(length);
    }
    if (followerlist !== null) {
      setfollower(followerlist.length);
    }
  };

  useEffect(() => {
    props.change("User");
    getData();
  }, []);
  return (
    <>
      <h1>Userpage</h1>
      <Link to="/follow" className="link">
        {follow}フォロー
      </Link>
      <br></br>
      <Link to="/follower" className="link">
        {follower}フォロワー
      </Link>
      <div>
        <div>{tweetlist.length > 0 && <Tweet array={tweetlist} />}</div>
      </div>
    </>
  );
};

export default Userpage;
