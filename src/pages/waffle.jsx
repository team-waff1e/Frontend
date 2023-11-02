import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../store/postsSlice";

// 현재 페이지로 오게되면 axios로 통신하여 현재 waffle의 id를 넘기고,
// 받아온 데이터를 postSlice 에 저장한다. 이후 해당 정보를 이용해서 화면에 출력.
// => 수정페이지에서 정보를 재사용할 것이기 때문에 useState보다 redux 에 저장하는게 더 좋을듯?
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
