// edit-comment.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReply } from "../../store/commentsSlice";

const EditComment = ({ comment, onCancel }) => {
  const dispatch = useDispatch();
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleSave = () => {
    // 선택된 댓글을 수정하고 store에 반영
    dispatch(
      editReply({
        ...comment,
        content: editedContent,
        updatedAt: new Date().toISOString(),
      })
    );
    onCancel(); // 댓글 수정 폼을 닫기
  };

  return (
    <div>
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default EditComment;
