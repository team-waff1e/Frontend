import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost, selectPost, clearSelectedPost } from '../store/postsSlice';
import { useNavigate } from 'react-router-dom';

const PostEdit = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);
    const navigate = useNavigate(); 

    const onClickBtn = () => {
        navigate(-1);
    }

  // 편집 중인 내용을 관리하는 로컬 state
  const [editedContent, setEditedContent] = useState(selectedPost ? selectedPost.content : '');

  // 내용 변경을 처리하는 함수
  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  // 게시물 편집을 처리하는 함수
  const handleEditPost = () => {
    if (selectedPost) {
      dispatch(editPost({ id: selectedPost.id, content: editedContent }));
      dispatch(selectPost(null)); // 편집 후 선택된 게시물을 초기화
    }
  };

  // 편집 취소 및 선택된 게시물 초기화
  const handleCancelEdit = () => {
    dispatch(clearSelectedPost());
  };

  // 선택된 게시물이 변경될 때마다 편집 중인 내용을 업데이트
  useEffect(() => {
    setEditedContent(selectedPost ? selectedPost.content : '');
  }, [selectedPost?.content]);

  return (
    <div>
      <h2>Edit Post</h2>
      <button onClick={onClickBtn}>뒤로가기</button>
      <label htmlFor="editedContent">Edited Content:</label>
      <textarea
        id="editedContent"
        value={editedContent}
        onChange={handleContentChange}
      />
      <br />
      <button onClick={handleEditPost}>Save Changes</button>
      <button onClick={handleCancelEdit}>Cancel</button>
    </div>
  );
};

export default PostEdit;
