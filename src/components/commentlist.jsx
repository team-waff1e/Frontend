import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CommentForm from './commentform';
import { addComment } from '../store/commentsSlice';
import { useDispatch } from 'react-redux';
import { commentLike } from '../store/likeSlice';
import { deleteComment } from '../store/commentsSlice';


const CommentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector((state) => state.comments);
  const commentLikes = useSelector((state) => state.like);
  
  // 새로운 댓글을 추가하는 함수
  const handleAddComment = (newComment) => {
    dispatch(addComment(newComment));
  }

  // 댓글에 좋아요를 토글하는 함수
  const handleLikeComment = (commentId) => {
    dispatch(commentLike({ commentId }));
  }

const handleEditComment = (comment) => {
  navigate(`/comments/${comment.id}/edit`);
}

const handleDeleteComment = (commentId) => {
  dispatch(deleteComment({ id: commentId }));
}

  return (
    <div>
      {Array.isArray(comments) &&
        comments.map((comment) => (
          <div key={comment.id}>
            {/* 댓글 내용 */}
            <p>{comment.content}</p>
            {/* 댓글 생성일 */}
            <p>Created at: {comment.createdAt}</p>
            {/* 댓글 수정일 */}
            <p>Updated at: {comment.updatedAt}</p>
            {/* 회원 정보 */}
            <p>Member:</p>
            <ul>
              <li>Nickname: {comment.member.nickname}</li>
              <li>Profile URL: {comment.member.profile_url}</li>
            </ul>

            {/* 좋아요 버튼 */}
            <button onClick={() => handleLikeComment(comment.id)}>
              {commentLikes[comment.id]?.isHeartRed ? (
                <span>👍</span>
              ) : (
                <span>👎</span>
              )}
            </button>
            {/* 좋아요 수 */}
            <p>Likes: {commentLikes[comment.id]?.likes || 0}</p>

            {/* 댓글 수정 버튼 */}
            <button onClick={() => handleEditComment(comment)}>수정</button>
            {/* 댓글 삭제 버튼 */}
            <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
          </div>
        ))}

      {/* CommentForm 컴포넌트를 렌더링하여 새로운 댓글을 추가 */}
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default CommentList;
