import React, { Children, useEffect, useReducer, useState } from "react";
import { Redirect } from "react-router-dom";
import auth from "./auth";
const LoginCheck = ({ children }: any) => {
  const [state, statechange] = useState(false);
  const [check, checkchange] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        statechange(true);
        checkchange(true);
      } else {
        checkchange(true);
        statechange(false);
      }
    });
  }, []);

  if (!check) {
    return <></>;
  }

  if (state) {
    return children;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default LoginCheck;
