import React, { useCallback, useEffect, useState } from "react";
import { getFollowuidname, userSearch } from "../exportjs/ajax";
import UserList from "../parts/UserList";
import PrimaryButton from "../parts/PrimaryButton";
import TextInput from "../parts/TextInput";
const Searchpage = (props: any) => {
  const [searchWord, setsearchWord] = useState("");
  const [searchlist, setseachList] = useState([]);
  const [followList, setfollowList] = useState([]);
  const [check, change] = useState(false);
  const inputSearchword = useCallback(
    (event) => {
      setsearchWord(event.target.value);
    },
    [setsearchWord]
  );
  const btnClick = useCallback(async (searchWord) => {
    change(false);
    const search = await userSearch(searchWord);
    const follow = await getFollowuidname();
    setseachList(search);
    setfollowList(follow);
    change(true);
  }, []);
  useEffect(() => {
    props.change("Search");
  }, []);
  return (
    <div>
      <h1>Search</h1>
      <TextInput
        fullWidth={false}
        label={"検索"}
        multiline={false}
        required={false}
        rows={1}
        value={searchWord}
        type={"email"}
        onChange={inputSearchword}
      />
      <PrimaryButton
        label={"検索"}
        onClick={() => {
          btnClick(searchWord);
        }}
        width={150}
      />
      <div className="listdiv">
        {check === true && (
          <UserList follower={searchlist} follow={followList} />
        )}
      </div>
    </div>
  );
};

export default Searchpage;
