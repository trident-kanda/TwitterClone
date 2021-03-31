import React, { useEffect, useState } from "react";
import Backbutton from "./../parts/Backbutton";
import { getFolloweruidname, getFollowuidname } from "../exportjs/ajax";
import UserList from "../parts/UserList";
const Followerpage = () => {
  const [followerList, setfollowerList] = useState([]);
  const [followList, setfollowList] = useState([]);

  useEffect(() => {
    const getFollower = async () => {
      const follower = await getFolloweruidname();
      const follow = await getFollowuidname();
      if (follow !== null) {
        setfollowList(follow);
      }
      if (follower !== null) {
        setfollowerList(follower);
      }
    };
    getFollower();
  }, []);

  return (
    <>
      <h1>Follower</h1>
      <Backbutton />
      <div>
        {followerList.length > 0 && (
          <UserList follower={followerList} follow={followList} />
        )}
      </div>
    </>
  );
};

export default Followerpage;
