import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  min-height: 100%;
`;

export default function Waffles() {
  const { posts } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(
      addPost({
        user: "New User",
        postContent: "This is a new post",
        likes: 0,
        timestamp: "1d",
      })
    );
  };

  return (
    <Wrapper>
      <div className="waffles">
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.user}</h2>
              <p>{post.postContent}</p>
              <p>Likes: {post.likes}</p>
              <p>Timestamp: {post.timestamp}</p>
            </div>
          ))}
        </div>
        <button onClick={handleAddPost}>새로운 게시물 추가</button>
      </div>
    </Wrapper>
  );
}
