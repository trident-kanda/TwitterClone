import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import auth from "../exportjs/auth";
import PrimaryButton from "./PrimaryButton";
const LogOut = () => {
  const history = useHistory();
  const logout = () => {
    auth
      .signOut()
      .then(function () {
        history.push("/signin");
      })
      .catch(function (error) {
        ///
      });
  };

  return (
    <div className="logout">
      <PrimaryButton
        label={"ログアウト"}
        onClick={() => {
          logout();
        }}
        width={150}
      />
    </div>
  );
};

export default LogOut;
