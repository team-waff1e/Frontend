import axios from "axios";
import { SIGNUP_URL } from "./urls";

export default async function AddMember({ email, name, pwd, nickname }) {
  const response = await axios.post(SIGNUP_URL, {
    email,
    name,
    pwd,
    nickname,
  });
  return response.data.errorCode;
}
