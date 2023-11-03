import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import PostList from '../postlist';
import CreatePost from '../createpost';
import CommentList from '../commentlist';
import axios from 'axios'; 
import "../waffles.css";


const Waffles = () => {
  const [posts, setPosts] = useState([]);



  const fetchPosts = () => {
    axios.get('SERVERURL/posts') 
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const addPost = (newPost) => {
    axios.post('SERVERURL/createPost', newPost) 
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((error) => {
        console.error('Error adding a new post:', error);
      });
  };

  useEffect(() => {
    const examplePosts = [
      {
        id: 1,
        content: 'This is an example post 1',
      },
      {
        id: 2,
        content: 'This is an example post 2',
      },
      {
        id: 3,
        content: 'This is an example post 3',
      },
    ];

    setPosts(examplePosts);

    fetchPosts(); 
  }, []);

  return (
    <div className='homepage'>

      <div className="crepost">
        <Navbar />
      </div>
      <div className="posts">
        <CreatePost onAddPost={addPost} />
        <PostList posts={posts} />
        {/* <CommentList comments={exampleComments} /> */}
      </div>



    </div>
  );
};

export default Waffles;
