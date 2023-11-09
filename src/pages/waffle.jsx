import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import PostDetail from '../components/postdetail'; 
import CommentList from '../components/commentlist'; 
import CommentForm from '../components/commentform'; 
import { useNavigate } from 'react-router-dom';

const Waffle = () => {
  const [post, setPost] = useState(null); // 와플 게시물을 위한 상태
  const [comments, setComments] = useState([]); // 게시물과 관련된 댓글을 위한 상태
  const [isEditing, setEditing] = useState(false); // 게시물을 편집 중인지 여부를 추적하는 상태
  const [editedPost, setEditedPost] = useState(''); // 편집된 게시물 내용을 저장하는 상태
  const navigate = useNavigate();


  // 서버에서 와플 게시물 데이터를 가져오는 함수
  const fetchPost = () => {
    axios.get('SERVERURL/postData') // GET 요청을 통해 게시물 데이터를 가져옴
      .then((response) => {
        setPost(response.data); // 가져온 데이터로 게시물 상태를 업데이트
      })
      .catch((error) => {
        console.error('Error fetching post data:', error); // 요청이 실패한 경우 에러를 처리
      });
  };

  // 게시물과 관련된 댓글을 서버에서 가져오는 함수
  const fetchComments = () => {
    axios.get('SERVERURL/comments') // GET 요청을 통해 댓글을 가져옴
      .then((response) => {
        setComments(response.data); // 가져온 데이터로 댓글 상태를 업데이트
      })
      .catch((error) => {
        console.error('Error fetching comments:', error); // 요청이 실패한 경우 에러를 처리
      });
  };

  // 컴포넌트가 마운트될 때 게시물 및 댓글 데이터를 가져오도록 useEffect를 사용
  useEffect(() => {
    fetchPost(); // 와플 게시물 데이터를 가져오기
    fetchComments(); // 게시물과 관련된 댓글을 가져오기
  }, []);

  // 게시물을 좋아요하는 함수
  const handleLike = () => {
    axios.post('SERVERURL/like', { postId: post.id }) // POST 요청을 통해 게시물을 좋아요
      .then((response) => {
        setPost({ ...post, isLiked: response.data.isLiked }); // 게시물 상태를 좋아요 상태로 업데이트
      })
      .catch((error) => {
        console.error('Error liking the post:', error); // 요청이 실패한 경우 에러를 처리
      });
  };

  // 게시물을 편집하는 함수
  const handleEdit = () => {
    axios.put('SERVERURL/edit', { postId: post.id, content: editedPost }) // PUT 요청을 통해 게시물을 편집
      .then(() => {
        setPost({ ...post, content: editedPost }); // 게시물 내용을 업데이트
      })
      .catch((error) => {
        console.error('Error editing the post:', error); // 요청이 실패한 경우 에러를 처리
      });

    setEditing(!isEditing); // 편집 상태를 토글
  };

  // 게시물을 삭제하는 함수
  const handleDelete = () => {
    axios.delete(`SERVERURL/delete/${post.id}`) // DELETE 요청을 통해 게시물을 삭제
      .then(() => {
        setPost({ ...post, content: 'This post has been deleted.' }); // 게시물 내용을 업데이트
      })
      .catch((error) => {
        console.error('Error deleting the post:', error); // 요청이 실패한 경우 에러를 처리
      });
  };

  // 새로운 댓글을 게시물에 추가하는 함수
  const addComment = (newComment) => {
    axios.post('SERVERURL/createComment', { postId: post.id, content: newComment }) // POST 요청을 통해 댓글을 추가
      .then((response) => {
        setComments([...comments, response.data]); // 새 댓글로 댓글 상태를 업데이트
      })
      .catch((error) => {
        console.error('Error creating a comment:', error); // 요청이 실패한 경우 에러를 처리
      });
  };

  // 게시물 데이터가 아직 로드되지 않은 경우 로딩 메시지를 표시
  if (!post) {
    return <div>Loading...</div>;
  }

  // PostDetail, CommentList 및 CommentForm 컴포넌트를 가져온 데이터와 함께 렌더링
  return (
    <div>
      <PostDetail
        post={post}
        onLike={handleLike}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default Waffle;
