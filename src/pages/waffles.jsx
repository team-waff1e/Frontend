import { Link } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";

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
    <>
      <div className="origin">
        <h1>Waffles</h1>
        <p>
          <Link to="/members/{member.id}">멤버보기</Link>
        </p>
        <p>
          <Link to="/">홈으로</Link>
        </p>
      </div>
      <div className="waffles">
        <div>
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
        </div>
        {/* 새로운 게시물을 추가하는 버튼 */}
        <button onClick={handleAddPost}>새로운 게시물 추가</button>
      </div>
    </>
  );
}
