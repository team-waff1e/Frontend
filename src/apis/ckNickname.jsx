import axios from "axios";
import { CK_NICKNAME_URL } from "./urls";

export default async function CkNickname({ nickname }) {
  const response = await axios.post(CK_NICKNAME_URL, { nickname });
  return response.data.errorCode;
}
