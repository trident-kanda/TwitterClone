import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUpdata } from "../exportjs/ajax";
import auth from "../exportjs/auth";
import getUid from "../exportjs/getUid";
import PrimaryButton from "../parts/PrimaryButton";
import TextInput from "../parts/TextInput";

const SignUppage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const history = useHistory();
  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );
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
  const inputRePassword = useCallback(
    (event) => {
      setRePassword(event.target.value);
    },
    [setRePassword]
  );

  const signUp = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      alert("必須項目が未入力です");
      return;
    }
    if (password !== rePassword) {
      alert("確認用パスワードが違います");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        const user = auth.currentUser;
        if (user !== null) {
          user.updateProfile({ displayName: username });
        }
        const userdata = getUid();
        if (userdata !== undefined) {
          const uid = userdata[0];
          if (uid !== null && uid !== undefined) {
            signUpdata(uid, username);
          }
        }
        history.push("/");
      })
      .catch(function (error) {});
  };

  return (
    <div className="container">
      <h2 className="center">新規会員登録</h2>
      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
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
      <TextInput
        fullWidth={true}
        label={"パスワード（確認用）"}
        multiline={false}
        required={true}
        rows={1}
        value={rePassword}
        type={"password"}
        onChange={inputRePassword}
      />
      <div className="center">
        <PrimaryButton
          label={"会員登録"}
          onClick={() => {
            signUp();
          }}
          width={256}
        />
        <br></br>
        <Link to="/signin">ログインはこちら</Link>
      </div>
    </div>
  );
};

export default SignUppage;
