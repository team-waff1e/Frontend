import { useRef, useState } from "react";
import {
  Comment,
  CommentBtn,
  CommentForm,
  ProfileImg,
  Wrapper,
} from "./create-comment-form";

export default function CreateComment({ waffleId }) {
  const [content, setContent] = useState("");

  const textareaRef = useRef();
  const resizeTextarea = (e) => {
    setContent(e.currentTarget.value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "50px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <Wrapper>
      <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
      <CommentForm>
        <Comment
          ref={textareaRef}
          onInput={resizeTextarea}
          value={content}
          maxLength={1000}
          placeholder="Post your reply"
          required
        ></Comment>
        <CommentBtn type="submit">Reply</CommentBtn>
      </CommentForm>
    </Wrapper>
  );
}
