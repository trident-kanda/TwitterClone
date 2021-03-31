import React, { useEffect, useState } from "react";
import FollowButton from "./FollowButton";
type props = {
  follow: {
    0: string;
    1: string;
    name: string;
    uid: string;
  }[];
  follower: {
    0: string;
    1: string;
    name: string;
    uid: string;
  }[];
};
const UserList = (props: props) => {
  const [list, setlist] = useState([]);
  const pushList = () => {
    const li: any = [];
    let count = 0;
    let checklist: string[] = [];
    const checkFollow = (uid: string) => {
      if (props.follow === null) {
        return false;
      }
      if (count === 0) {
        props.follow.map((element) => {
          checklist.push(element.uid);
        });
      }
      const result = checklist.some((element) => element === uid);
      return result;
    };
    if (props.follower !== null) {
      props.follower.map((element) => {
        let countStr = String(count);
        if (checkFollow(element.uid)) {
          li.push(
            <li key={countStr} className="list_li">
              <div className="list_container">
                <h1>{element.name}</h1>
                <FollowButton
                  label={"フォロー中"}
                  uid={props.follower[count].uid}
                  state={true}
                />
              </div>
            </li>
          );
        } else {
          li.push(
            <li key={countStr} className="list_li">
              <div className="list_container">
                <h1>{element.name}</h1>
                <FollowButton
                  label={"フォロー"}
                  uid={props.follower[count].uid}
                  state={false}
                />
              </div>
            </li>
          );
        }
        count++;
      });
    }
    setlist(li);
  };
  useEffect(() => {
    pushList();
  }, []);
  return <ul className="list_ul">{list}</ul>;
};

export default UserList;
