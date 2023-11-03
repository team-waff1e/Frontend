import React from 'react';
import { useSelector } from 'react-redux'; 



const CommentList = () => {
let comments = useSelector((state)=>{return state})


  return (
    <div>
      {Array.isArray(comments) &&
      comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>Created at: {comment.createdAt}</p>
          <p>Updated at: {comment.updatedAt}</p>
          <p>Member:</p>
          <ul>
            <li>Nickname: {comment.member.nickname}</li>
            <li>Profile URL: {comment.member.profile_url}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
