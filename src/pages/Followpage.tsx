import React, { useEffect, useState } from "react";
import { getFollowuidname } from "../exportjs/ajax";
import FollowUserlist from "../parts/FollowUserlist";
import Backbutton from "./../parts/Backbutton";

const Followpage = () => {
  const [followList, setfollowList] = useState([]);

  useEffect(() => {
    const getFollow = async () => {
      const follow = await getFollowuidname();
      if (follow !== null) {
        setfollowList(follow);
      }
    };
    getFollow();
  }, []);

  return (
    <>
      <h1>Follow</h1>
      <Backbutton />
      <div>
        {followList.length > 0 && <FollowUserlist follow={followList} />}
      </div>
    </>
  );
};

export default Followpage;
