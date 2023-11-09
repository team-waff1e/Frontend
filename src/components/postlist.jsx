import React, { useState } from 'react';
import "../styles/post.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectPost, clearSelectedPost, deletePost, editPost } from '../store/postsSlice';
import { toggleLike } from '../store/likeSlice';
import { useNavigate } from 'react-router-dom';
import PostEdit from './postedit';


const PostList = ({ posts }) => {
  const postLikes = useSelector((state) => state.like);
  const dispatch = useDispatch();

  // 선택된 게시물을 Redux 스토어에서 가져옴
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  // 게시물에 '좋아요'를 누르는 함수
  const handleLikeClick = (postId) => {
    dispatch(toggleLike({ postId })); // 게시물 ID와 함께 'toggleLike' 액션을 디스패치
  };

  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = (post) => {
    dispatch(editPost(post));
    setEditMode(true);
  }

  // 게시물 세부 정보를 보는 함수
  const handleViewDetails = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      dispatch(clearSelectedPost()); // 선택된 게시물 초기화
    } else {
      dispatch(selectPost(post)); // 선택된 게시물 설정
      navigate(`/post/${post.id}`); // 게시물 세부 정보 페이지로 이동
    }
  };

  // 게시물을 삭제하는 함수
  const handleDeletePost = (postId) => {

    dispatch(deletePost({id : postId}));
  };

  // 게시물을 수정하는 함수
  //   // Dispatch the action to edit the post
  //   // You may want to navigate to an edit page or show a modal for editing
  //   // For simplicity, let's directly dispatch the action here
  //   // Update the action and reducer in your postsSlice accordingly

  const handleEditPost = (post) => {
    const updatedContent = 'Updated content';
    dispatch(editPost({ id: post.id, content: updatedContent }));
  }

  return (
    <div className='postlist'>
      {/* editMode가 true인 경우 PostEdit 컴포넌트를 렌더링 */}
      {editMode ? (
        <PostEdit />
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            {/* 게시물 내용 */}
            <p>{post.content}</p>
            {/* 사용자 정보 */}
            <div>
              {post.member && (
                <>
                  {/* 사용자 프로필 사진 */}
                  {post.member.profile_url && (
                    <img src={post.member.profile_url} alt="User Profile" />
                  )}
                  {/* 사용자 닉네임 */}
                  {post.member.nickname && (
                    <p>Nickname: {post.member.nickname}</p>
                  )}
                </>
              )}
            </div>
            {/* 좋아요 버튼 */}
            <div>
              <button onClick={() => handleLikeClick(post.id)}>
                {postLikes[post.id]?.isHeartRed ? (
                  <span>👍</span>
                ) : (
                  <span>👎</span>
                )}
              </button>
              {/* 좋아요 수 표시 */}
              <p>Likes: {postLikes[post.id]?.likes || 0}</p>
            </div>
            {/* 게시물 세부 정보 보기 버튼 */}
            <button onClick={() => handleViewDetails(post)}>댓글보기</button>
            {/* 게시물 삭제 버튼 */}
            <button onClick={() => handleDeletePost(post.id)}>삭제</button>
            {/* 게시물 수정 버튼 */}
            <button onClick={() => handleEditClick(post)}>수정</button>
          </div>
        ))
      )}
    </div>
  );

};
export default PostList;
