import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from '../store/postsSlice';
import { toggleLike } from '../store/likeSlice';
import { useNavigate } from 'react-router-dom';
import "../styles/postdetail.css";
import CommentList from './commentlist';

const PostDetail = () => {
  const dispatch = useDispatch();

  // Redux 스토어에서 'posts' 슬라이스의 'selectedPost' 속성 선택
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  // Redux 스토어에서 'posts' 및 'like' 데이터 선택
  const posts = useSelector((state) => state.posts);
  const postLikes = useSelector((state) => state.like);

  // 'useNavigate' 훅을 사용하여 앱 내에서 탐색 활성화
  const navigate = useNavigate();

  // 메인 게시물 페이지로 돌아가는 함수
  const handleGoBack = () => {
    dispatch(selectPost(null)); // 선택된 게시물 초기화
    navigate('/'); // 메인 게시물 페이지로 이동
  };

  // 게시물에 '좋아요'를 누르는 함수
  const handleLikeClick = (postId) => {
    dispatch(toggleLike({ postId })); // 게시물 ID와 함께 'toggleLike' 액션을 디스패치
  };


  
  return (
    <div className="post-detail-container">
      {selectedPost ? (
        <div>
          {/* 선택된 게시물의 내용을 표시 */}
          <p>{selectedPost.content}</p>

          {/* 게시물에 대한 '좋아요'를 토글하는 버튼 */}
          <button onClick={() => handleLikeClick(selectedPost.id)}>
            {postLikes[selectedPost.id]?.isHeartRed ? (
              <span>👍</span>
            ) : (
              <span>👎</span>
            )}
          </button>

          {/* 게시물에 대한 '좋아요' 수를 표시 */}
          <p>Likes: {postLikes[selectedPost.id]?.likes || 0}</p>

          {/* 메인 게시물 페이지로 돌아가는 버튼 */}
          <button onClick={handleGoBack}>게시물 목록으로 돌아가기</button>
        </div>
      ) : (
        <div style={{ marginLeft: 300 }}>
          {/* 게시물이 선택되지 않았을 때의 메시지 */}
          <h2>게시물이 선택되지 않았습니다. 목록에서 게시물을 선택하세요.</h2>
        </div>
      )}

      {/* CommentList 컴포넌트 렌더링 */}
      <CommentList />
    </div>
  );
};

export default PostDetail;
