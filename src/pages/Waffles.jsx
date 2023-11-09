import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import PostList from '../components/postlist';
import CreatePost from '../components/createpost';
import axios from 'axios'; 
import "../styles/waffles.css";
import { useDispatch } from 'react-redux';


const Waffles = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch(); // Assuming you have access to the Redux dispatch function

  // 서버로부터 게시물 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
      const response = await axios.get('SERVERURL/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // 새로운 게시물을 추가하는 함수
  const addPost = async (newPost) => {
    try {
      const response = await axios.post('SERVERURL/createPost', newPost);
      dispatch(addPost(response.data)); // Assuming addPost action is available in your Redux store
    } catch (error) {
      console.error('Error adding a new post:', error);
    }
  };

  // 게시물 삭제
  const deletePost = async (postId) => {
    try {
      await axios.delete(`SERVERURL/deletePost/${postId}`);
      dispatch(deletePost(postId)); // Assuming deletePost action is available in your Redux store
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // 게시물 수정
  const editPost = async (postId, updatedPost) => {
    try {
      await axios.put(`SERVERURL/editPost/${postId}`, { content: updatedPost });
      dispatch(editPost({ id: postId, content: updatedPost })); // Assuming editPost action is available in your Redux store
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // 초기 렌더링 시, 예시 게시물 목록을 설정하고 실제 게시물을 서버에서 가져옴
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
        {/* 'CreatePost' 컴포넌트를 렌더링하고 'addPost' 함수를 전달하여 새로운 게시물을 추가 */}
        <CreatePost onAddPost={addPost} />
        {/* 'PostList' 컴포넌트에 서버로부터 가져온 게시물 목록을 전달하여 렌더링. */}

        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Waffles;
