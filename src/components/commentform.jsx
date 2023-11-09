import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  // 댓글 내용이 변경될 때 호출되는 함수
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // 댓글 추가 버튼을 클릭할 때 호출되는 함수
  const handleAddComment = () => {
    const comment = {
      id: "ID",
      waffleId: "WAFFLEID",
      content: newComment,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      member: {
        nickname: "Current User",  
        profile_url: "current_user_profile.jpg",  
      },
    };

    onAddComment(comment);

    setNewComment('');
  };

  return (
    <div>
      {/* 댓글을 입력하는 textarea */}
      <textarea value={newComment} onChange={handleCommentChange} />
      {/* 댓글 추가 버튼 */}
      <button onClick={handleAddComment}>댓글 추가</button>
    </div>
  );
};

export default CommentForm;
