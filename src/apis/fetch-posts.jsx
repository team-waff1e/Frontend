import axios from "axios";
import { POST_URL } from "./urls";

export default async function fetchPosts() {
  const postsQuery = await axios.get(POST_URL);
  return postsQuery.data;
}
