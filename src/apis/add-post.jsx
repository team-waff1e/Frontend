import axios from "axios";
import { POST_URL } from "./urls";

export default async function addPost({ memberId, content }) {
  const response = await axios.post(POST_URL, { memberId, content });
  return response.data;
}
