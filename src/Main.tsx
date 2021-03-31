import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginCheck from "./exportjs/LoginCheck";
import Navbar from "./parts/Navbar";
import Userpage from "./pages/Userpage";
import SignUppage from "./pages/SignUppage";
import SignInpage from "./pages/SignInpage";
import Homepage from "./pages/Homepage";
import Tweetpage from "./pages/Tweetpage";
import Searchpage from "./pages/Searchpage";
import Followpage from "./pages/Followpage";
import Followerpage from "./pages/Followerpage";
import Header from "./parts/Header";
const Main = () => {
  const [state, change] = useState("Home");
  return (
    <BrowserRouter>
      <Route exact path="/signup" component={SignUppage}></Route>
      <Route exact path="/signin" component={SignInpage}></Route>
      <LoginCheck>
        <div className="login">
          <aside>
            <nav>
              <Navbar state={state} />
            </nav>
          </aside>
          <main>
            <Header />

            <Switch>
              <Route
                exact
                path="/"
                render={() => <Homepage change={change} />}
              ></Route>
              <Route
                path="/Tweet"
                render={() => <Tweetpage change={change} />}
              ></Route>
              <Route
                path="/Search"
                render={() => <Searchpage change={change} />}
              ></Route>
              <Route
                path="/userpage"
                render={() => <Userpage change={change} />}
              />

              <Route path="/Follow" component={Followpage}></Route>
              <Route path="/Follower" component={Followerpage}></Route>
            </Switch>
          </main>
        </div>
      </LoginCheck>
    </BrowserRouter>
  );
};

export default Main;
