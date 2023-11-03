import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, editComment } from './store/store';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (editComment) {
      dispatch(editComment({ postId, id: editComment.id, content: commentText }));
    } else {
      dispatch(
        addComment({
          id: 'generate a unique ID',
          waffleId: 'set the waffleId',
          content: commentText,
          createdAt: new Date().toISOString(),  
          updatedAt: new Date().toISOString(), 
          member: {
            nickname: 'nickname',
            profile_url: 'profile URL',
          },
        })
      );
    }

    setCommentText('');
  };

  return (
    <div>
      <textarea
        name="content"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleCommentSubmit}>Comment</button>
    </div>
  );
};

export default CommentForm;
