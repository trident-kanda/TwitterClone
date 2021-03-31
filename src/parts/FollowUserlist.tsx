import React, { useEffect, useState } from "react";
import FollowButton from "./FollowButton";
type props = {
  follow: {
    0: string;
    1: string;
    name: string;
    uid: string;
  }[];
};

const FollowUserlist = (props: props) => {
  const [list, setlist] = useState([]);
  const pushList = () => {
    const li: any = [];
    let count = 0;
    props.follow.map((element) => {
      let countStr = String(count);
      li.push(
        <li key={countStr} className="list_li">
          <div className="list_container">
            <h1>{element.name}</h1>
            <FollowButton
              label={"フォロー中"}
              uid={props.follow[count].uid}
              state={true}
            />
          </div>
        </li>
      );
      count++;
    });
    setlist(li);
  };
  useEffect(() => {
    pushList();
  }, []);
  return <ul className="list_ul">{list}</ul>;
};

export default FollowUserlist;
