import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likePost, unlikePost } from "../store/postsSlice";

function Waffle() {
  // 게시물 데이터와 관련된 상태를 설정합니다.
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(""); // 수정한 게시물 내용

  const dispatch = useDispatch();

  // 게시물 좋아요와 취소 액션을 디스패치하는 함수
  const handleLike = () => {
    if (post.isLiked) {
      // 이미 좋아요를 누른 상태라면 좋아요 취소
      dispatch(unlikePost(post.id));
    } else {
      // 좋아요를 누르지 않은 상태라면 좋아요
      dispatch(likePost(post.id));
    }
  };

  // 게시물 수정 버튼 클릭 시 호출되는 함수
  const handleEdit = () => {
    setIsEditing(true);
    // 수정할 게시물 내용을 현재 게시물 내용으로 초기화
    setEditedPost(post.content);
  };

  // 게시물 수정 완료 버튼 클릭 시 호출되는 함수
  const handleEditComplete = () => {
    // 수정한 내용을 백엔드로 업데이트 (추가 작업 필요)
    // 백엔드로의 업데이트가 완료되면 아래 라인을 통해 UI를 업데이트
    setPost({ ...post, content: editedPost });
    setIsEditing(false);
  };

  // 게시물 삭제 버튼 클릭 시 호출되는 함수
  const handleDelete = () => {
    // 게시물 삭제 액션을 디스패치 (추가 작업 필요)
  };

  // 게시물 내용을 가져오는 함수 (예: 백엔드 API 호출)
  const fetchPost = async () => {
    try {
      // 게시물 데이터를 가져옴 (예: axios.get(`/api/posts/${postId}`))
      // 가져온 데이터를 setPost를 사용해 설정
    } catch (error) {
      // 오류 처리
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때 게시물 내용을 가져옴
    fetchPost();
  }, []);

  return (
    <div>
      {post ? (
        <>
          <h1>게시물 제목</h1>
          {isEditing ? (
            // 게시물 수정 모드
            <>
              <textarea
                value={editedPost}
                onChange={(e) => setEditedPost(e.target.value)}
              />
              <button onClick={handleEditComplete}>수정 완료</button>
            </>
          ) : (
            // 게시물 조회 모드
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
