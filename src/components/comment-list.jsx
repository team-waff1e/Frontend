import { useDispatch } from "react-redux";
import CommentItem from "./comment-item";

export default function CommentList({ waffleId }) {
  const dispatch = useDispatch();

  return (
    <div>
      <CommentItem />
      {/* {comments.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))} */}
    </div>
  );
}
