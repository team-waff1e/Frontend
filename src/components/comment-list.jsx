import CommentItem from "./comment-item";

export default function CommentList({ waffleId }) {
  return (
    <div>
      <CommentItem />
      {/* {comments.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))} */}
    </div>
  );
}
