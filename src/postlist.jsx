import React, { useState } from 'react';
import "./post.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from './store/store';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts }) => {
  const postLikes = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const { isLike, likes, isHeartRed } = useSelector((state) => state.like);

  const handleLikeClick = (postId) => {
    dispatch(toggleLike({ postId }));
  };

  const navigate = useNavigate();

  const [selectedPost, setSelectedPost] = useState(null);

  const handleViewDetails = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      setSelectedPost(null);
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <div className='postlist'>
      {selectedPost && (
        <div>
          <h2>Selected Post Details</h2>
          <p>{selectedPost.content}</p>
        </div>
      )}
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <button onClick={() => handleLikeClick(post.id)}>
            {postLikes[post.id]?.isHeartRed ? (
              <span>👍</span>
            ) : (
              <span>👎</span>
            )}
          </button>
          <p>Likes: {postLikes[post.id]?.likes || 0}</p>
          <button onClick={() => navigate(`/post/${post.id}`)}>View Details</button>
          <button onClick={() => navigate(`/post/${post.id}/comments`)}>Comments</button>
        </div>
        
      ))}
      
    </div>
  );
};

export default PostList;
