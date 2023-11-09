import axios from "axios";
import { POST_URL } from "./urls";

export default async function deletePost({ waffleId }) {
  const response = await axios.delete(POST_URL + `/${waffleId}`, { waffleId });
  return response.data;
}
