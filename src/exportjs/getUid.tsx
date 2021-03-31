import auth from "./auth";
const getUid = () => {
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    const name = user.displayName;
    return [uid, name];
  }
};

export default getUid;
