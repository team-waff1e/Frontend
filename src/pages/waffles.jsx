import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";

function Waffles() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // 새로운 포스트를 추가하는 함수
  const handleAddPost = () => {
    // Redux를 사용하여 새로운 게시물을 추가하는 액션을 디스패치합니다.
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
    <div>
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
  );
}

export default Waffles;
