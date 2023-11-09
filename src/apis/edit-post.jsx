import axios from "axios";
import { POST_URL } from "./urls";

export default async function editPost({ waffleId, memberId, content }) {
  const response = await axios.patch(POST_URL + `/${waffleId}`, {
    memberId,
    content,
  });
  return response.data;
}
