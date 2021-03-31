import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "../exportjs/auth";
import PrimaryButton from "../parts/PrimaryButton";
import TextInput from "../parts/TextInput";

const SignInpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const signIn = () => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="container">
      <h2 className="center">ログイン</h2>
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="center">
        <PrimaryButton
          label={"ログイン"}
          onClick={() => {
            signIn();
          }}
          width={256}
        />
        <div className=".space"></div>
        <Link to="/signup">新規会員登録はこちら</Link>
      </div>
    </div>
  );
};

export default SignInpage;
