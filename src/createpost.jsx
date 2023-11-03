import React, { useState } from 'react';
import axios from 'axios'; 
import "./post.css";


const CreatePost = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({ content: '' });

  const handlePostSubmit = () => {
    if (newPost.content.trim() === '') {
      return; 
    }

    axios.post('SERVERURL/createPost', newPost) 
      .then((response) => {
        onAddPost(response.data);
        setNewPost({ content: '' }); 
      })
      .catch((error) => {
        console.error('Error creating a new post:', error);
      });
  };

  return (
    <div className ="createpost">
      <textarea
        value={newPost.content}
        onChange={(e) => setNewPost({ content: e.target.value })}
        placeholder="What's new?"
      />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;
