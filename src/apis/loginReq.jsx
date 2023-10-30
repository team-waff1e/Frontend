import axios from "axios";
import { LOGIN_URL } from "./urls";

export default async function LoginReq({ email, pwd }) {
  const response = await axios.post(LOGIN_URL, { email, pwd });
  return response.data;
}
