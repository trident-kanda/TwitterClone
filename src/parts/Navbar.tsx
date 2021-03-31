import React, { useEffect, useState } from "react";
import Home from "./icon/Home";
import Search from "./icon/Search";
import Send from "./icon/Send";
import User from "./icon/User";

const Navbar = (props: any) => {
  const [homeColor, setHomecolor] = useState("#55acee");
  const [SendColor, setSendcolor] = useState("#808080");
  const [SearchColor, setSearchcolor] = useState("#808080");
  const [UserColor, setUsercolor] = useState("#808080");
  useEffect(() => {
    switch (props.state) {
      case "Home":
        setHomecolor("#55acee");
        setSendcolor("#808080");
        setSearchcolor("#808080");
        setUsercolor("#808080");
        break;
      case "Search":
        setHomecolor("#808080");
        setSendcolor("#808080");
        setSearchcolor("#55acee");
        setUsercolor("#808080");
        break;
      case "User":
        setHomecolor("#808080");
        setSendcolor("#808080");
        setSearchcolor("#808080");
        setUsercolor("#55acee");
        break;
      default:
        setHomecolor("#808080");
        setSendcolor("#55acee");
        setSearchcolor("#808080");
        setUsercolor("#808080");
    }
  });

  return (
    <ul className="nav_ul">
      <Home color={homeColor} />
      <Send color={SendColor} />
      <Search color={SearchColor} />
      <User color={UserColor} />
    </ul>
  );
};

export default Navbar;
