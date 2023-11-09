import React, { useState } from 'react';
import axios from 'axios';
import "../styles/post.css";
import CreatePostModal from './createpostmodal';

const CreatePost = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({ content: '' });
  const [showModal, setShowModal] = useState(false);

  const handlePostSubmit = () => {
    // 게시물 내용이 비어 있는지 확인
    if (newPost.content.trim() === '') {
      // 모달 다이얼로그를 표시
      setShowModal(true);
      return;
    }

    // 서버로 게시물 생성 요청을 보내고, 성공 시 새 게시물을 추가
    axios
      .post('SERVERURL/createPost', newPost)
      .then((response) => {
        onAddPost(response.data);
        setNewPost({ content: '' }); // 입력 필드 초기화
      })
      .catch((error) => {
        console.error('Error creating a new post:', error);
      });
  };

  const closeModal = () => {
    // 모달을 닫는 함수
    setShowModal(false);
  }

  const initializeInput = () => {
    // 입력 필드를 초기화하고 모달을 닫는 함수
    setNewPost({ content: '' });
    closeModal();
  }

  return (
    <div className="createpost">
      <textarea
        value={newPost.content}
        onChange={(e) => setNewPost({ content: e.target.value })}
        placeholder="What's new?"
      />
      <button onClick={handlePostSubmit}>Post</button>
      {showModal && (
        <CreatePostModal onClose={() => setShowModal(false)}>
          <p>빈 입력입니다</p>
          <button onClick={initializeInput}>OK</button>
        </CreatePostModal>
      )}
    </div>
  );
};

export default CreatePost;
