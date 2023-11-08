import { useEffect } from "react";
import CommentItem from "./comment-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchReplys } from "../store/commentsSlice";
import fetchComments from "../apis/fetch-comments";

export default function CommentList({ waffleId }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => {
    return state.comments;
  });

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchComments({ waffleId });
      const { errorCode } = await data;
      if (errorCode === 200) {
        const { instance } = await data;
        dispatch(fetchReplys(instance));
      }
    };
    loadComments();
  }, [waffleId, dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))}
    </div>
  );
}
