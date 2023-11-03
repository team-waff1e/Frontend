import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import PostDetail from '../postdetail';
import CommentList from '../commentlist';
import CommentForm from '../commentform';

const Waffle = () => {
  const [post, setPost] = useState(null); 
  const [comments, setComments] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editedPost, setEditedPost] = useState('');

  const fetchPost = () => {
    axios.get('SERVERURL/postData') 
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post data:', error);
      });
  };

  const fetchComments = () => {
    axios.get('SERVERURL/comments') 
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []); 

  const handleLike = () => {
    axios.post('SERVERURL/like', { postId: post.id })
      .then((response) => {
        setPost({ ...post, isLiked: response.data.isLiked });
      })
      .catch((error) => {
        console.error('Error liking the post:', error);
      });
  };

  const handleEdit = () => {
    axios.put('SERVERURL/edit', { postId: post.id, content: editedPost })
      .then(() => {
        setPost({ ...post, content: editedPost });
      })
      .catch((error) => {
        console.error('Error editing the post:', error);
      });

    setEditing(!isEditing);
  };

  const handleDelete = () => {
    axios.delete(`SERVERURL/delete/${post.id}`)
      .then(() => {
        setPost({ ...post, content: 'This post has been deleted.' });
      })
      .catch((error) => {
        console.error('Error deleting the post:', error);
      });
  };

  const addComment = (newComment) => {
    axios.post('SERVERURL/createComment', { postId: post.id, content: newComment })
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        console.error('Error creating a comment:', error);
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostDetail
        post={post}
        onLike={handleLike}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default Waffle;
