import { useEffect } from "react";
import CommentItem from "./comment-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchReplys } from "../../store/commentsSlice";

export default function CommentList({ waffleId }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => {
    return state.comments;
  });

  useEffect(() => {
    const errorCode = dispatch(fetchReplys({ waffleId }));
    if (errorCode === 200) {
      console.log("OK");
    } else if (errorCode === 400) {
      console.log(errorCode, "getting error: Bad Request");
    }
  }, [waffleId, dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))}
    </div>
  );
}
