import axios from "axios";
import { CK_EMAIL_URL, CK_NICKNAME_URL } from "./urls";

export default async function CkDuplication({ name, value }) {
  if (name === "email") {
    const response = await axios.post(CK_EMAIL_URL, { email: value });
    return response.data.errorCode;
  } else if (name === "nickname") {
    const response = await axios.post(CK_NICKNAME_URL, { nickname: value });
    return response.data.errorCode;
  }
}
