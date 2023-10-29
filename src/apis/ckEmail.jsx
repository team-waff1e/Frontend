import axios from "axios";
import { CK_EMAIL_URL } from "./urls";

export default async function CkEmail({ email }) {
  const response = await axios.post(CK_EMAIL_URL, { email });
  return response.data.errorCode;
}
