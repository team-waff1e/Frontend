import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../store/postsSlice";

function Waffle() {
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState("");

  const dispatch = useDispatch();

  const handleLike = () => {
    if (post.isLiked) {
      dispatch(unlikePost(post.id));
    } else {
      dispatch(likePost(post.id));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedPost(post.content);
  };

  const handleEditComplete = () => {
    setPost({ ...post, content: editedPost });
    setIsEditing(false);
  };

  const handleDelete = () => {};

  const fetchPost = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {post ? (
        <>
          <h1>게시물 제목</h1>
          {isEditing ? (
            <>
              <textarea
                value={editedPost}
                onChange={(e) => setEditedPost(e.target.value)}
              />
              <button onClick={handleEditComplete}>수정 완료</button>
            </>
          ) : (
            <>
              <p>{post.content}</p>
              <button onClick={handleEdit}>게시물 수정</button>
              <button onClick={handleDelete}>게시물 삭제</button>
              <button onClick={handleLike}>
                {post.isLiked ? "좋아요 취소" : "좋아요"}
              </button>
            </>
          )}
        </>
      ) : (
        <p>게시물을 불러오는 중...</p>
      )}
    </div>
  );
}

export default Waffle;
