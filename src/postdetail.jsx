import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from './store/store';
import { toggleLike } from './store/store';

const PostDetail = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const posts = useSelector((state) => state.posts.posts);
  const postLikes = useSelector((state) => state.like); 

  const handleGoBack = () => {
    dispatch(selectPost(null));
  };

  const handleLikeClick = (postId) => {
    dispatch(toggleLike({ postId }));
  };

  return (
    <div>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => handleLikeClick(selectedPost.id)}>
            {postLikes[selectedPost.id]?.isHeartRed ? (
              <span>👍</span>
            ) : (
              <span>👎</span>
            )}
          </button>
          <p>Likes: {postLikes[selectedPost.id]?.likes || 0}</p>
          <button onClick={handleGoBack}>Back to Posts</button>
        </div>
      ) : (
        <div style ={{marginLeft:300}}>
          <h2>No post selected. Select a post from the list.</h2>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
