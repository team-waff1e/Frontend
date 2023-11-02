import axios from "axios";
// import { SIGNUP_URL } from "./urls";

export default async function UpdataFollower({ email, name, pwd, nickname }) {
  const response = await axios.update(follow_url, {
    user_pk,
    nickname,
    follower,
    following,
  });

  return response.data.errorCode;
}
