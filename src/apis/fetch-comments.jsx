import axios from "axios";
import { POST_URL } from "./urls";

export default async function fetchComments({ waffleId }) {
  const commentsQuery = await axios.get(POST_URL + `/${waffleId}/comments`);
  return commentsQuery.data;
}
