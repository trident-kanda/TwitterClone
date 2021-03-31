import React, { useEffect, useState } from "react";
type props = {
  array: {
    0: string;
    1: string;
    2: string;
    3: string;
    body: string;
    date: string;
    id: string;
    name: string;
  }[];
};
const Tweet = (props: props) => {
  const [list, setlist] = useState();
  useEffect(() => {
    const pushList = () => {
      const li: any = [];
      props.array.map((element) => {
        li.push(
          <li key={element.id} className="list_li">
            <div>
              <a>{element.name}</a>
              <p>{element.date}</p>
              <p className="pre-wrap">{element.body}</p>
            </div>
          </li>
        );
      });
      setlist(li);
    };
    pushList();
  }, []);
  return <ul className="list_ul">{list}</ul>;
};

export default Tweet;
