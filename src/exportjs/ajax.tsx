import getUid from "./getUid";

export const follow = async (followuid: string) => {
  const data = getUid();
  if (data !== null && data !== undefined) {
    const uid = data[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      body.append("followuid", followuid);
      const method = "post";
      const filename = "follow.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
    }
  }
};

export const unfollow = async (followuid: string) => {
  const data = getUid();
  if (data !== null && data !== undefined) {
    const uid = data[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      body.append("followuid", followuid);
      const method = "post";
      const filename = "unfollow.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
    }
  }
};

export const getFollowuidname = async () => {
  const userdata = getUid();
  if (userdata !== undefined && userdata !== null) {
    const uid = userdata[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      const method = "post";
      const filename = "getFollow.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
      return users;
    }
  }
};

export const postTweet = async (tweet: string) => {
  const userdata = getUid();
  if (userdata !== null && userdata !== undefined) {
    const uid = userdata[0];
    const name = userdata[1];
    if (uid !== null && name !== null) {
      //Ajaxを記述
      const body = new FormData();
      body.append("body", tweet);
      body.append("uid", uid);
      body.append("name", name);
      const method = "post";
      const filename = "tweet.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
    }
  }
};

export const getFolloweruidname = async () => {
  const userdata = getUid();
  if (userdata !== undefined && userdata !== null) {
    const uid = userdata[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      const method = "post";
      const filename = "getFollower.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
      return users;
    }
  }
};

export const userSearch = async (userv: string) => {
  const userdata = getUid();
  if (userdata !== undefined && userdata !== null) {
    const uid = userdata[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("sarch", userv);
      body.append("uid", uid);
      const method = "post";
      const filename = "userSearch.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
      return users;
    }
  }
};

export const getTweet = async () => {
  const userdata = getUid();
  if (userdata !== undefined && userdata !== null) {
    const uid = userdata[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      const method = "post";
      const filename = "gettweet.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
      return users;
    }
  }
};

export const getMytweet = async () => {
  const userdata = getUid();
  if (userdata !== undefined && userdata !== null) {
    const uid = userdata[0];
    if (uid !== null) {
      const body = new FormData();
      body.append("uid", uid);
      const method = "post";
      const filename = "getmytweet.php";
      const res = await fetch(filename, { body, method });
      const users = await res.json();
      return users;
    }
  }
};

export const signUpdata = async (uid: string, name: string) => {
  const body = new FormData();
  body.append("uid", uid);
  body.append("name", name);
  const method = "post";
  const filename = "signUp.php";
  const res = await fetch(filename, { body, method });
  const users = await res.json();
};
