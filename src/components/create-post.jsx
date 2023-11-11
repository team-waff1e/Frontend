import { useEffect, useRef, useState } from "react";
import {
  Access,
  AccessText,
  BtnBox,
  Post,
  PostBtn,
  PostForm,
  PostTypes,
  Profile,
  ProfileImg,
  TypeBtn,
  Wrapper,
} from "./create-post-form";
import addPost from "../apis/add-post";
import { useDispatch, useSelector } from "react-redux";
import { addWaffle, editWaffle } from "../store/wafflesSlice";
import { useNavigate } from "react-router-dom";
import editPost from "../apis/edit-post";

// **상의 후 할건지 결정할 것들
// image 버튼 눌러서 이미지 업로드 가능하도록 구현
// poll, calendar 버튼 눌렀을 때 입력창 바뀌도록 구현
// => 현재 <Post /> 컴포넌트 부분인데, redux 상태관리 + 조건문 이용해서 컴포넌트 교체하도록 할 것
// 공개 범위 기능 구현
// emoji 버튼 눌러서 토글창 열리도록하고, 이모티콘 열 수 있도록 구현 (트위터 이모지 api 필요)
export default function CreatePost({ waffleId, type = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPost = useSelector((state) => {
    return state.waffles.selectedPost;
  });

  // variables
  const [content, setContent] = useState("");
  const { memberId } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    if (type === "edit") {
      setContent(selectedPost.content);
    }
  }, [type, selectedPost.content]);

  // textarea 높이 자동 조절
  const textareaRef = useRef();
  const resizeTextarea = (e) => {
    setContent(e.currentTarget.value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "50px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  // 프로필 이미지 클릭시 프로필 화면으로 Link 되도록 하기

  // Submit 로직
  const postSubmit = async (e) => {
    e.preventDefault();
    if (content === "" || isNaN(memberId)) return;
    try {
      if (type === "post") {
        const result = await addPost({ memberId, content });
        const { errorCode, errorMsg } = await result;
        if (errorCode === 201) {
          // 성공시
          console.log("posting succeed");
          // 변수 초기화 및 와플 목록에 추가
          setContent("");
          const { instance } = await result;
          dispatch(addWaffle(instance));
        } else if (errorCode !== 201) {
          console.log(errorCode, "posting error :", errorMsg);
        }
      } else if (type === "edit") {
        const result = await editPost({ waffleId, memberId, content });
        const { errorCode, errorMsg } = await result;
        if (errorCode === 200) {
          // 성공시
          console.log("editing succeed");
          dispatch(editWaffle({ waffleId, content }));
          setContent("");
          navigate(`/waffles/${waffleId}`);
        } else if (errorCode !== 200) {
          console.log(errorCode, "editing error :", errorMsg);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <Profile>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
      </Profile>
      <PostForm onSubmit={postSubmit}>
        <Post
          ref={textareaRef}
          onInput={resizeTextarea}
          value={content}
          maxLength={1000}
          placeholder="What is happening?"
          required
        />
        <Access>
          <AccessText type="button">🌐Everyone can reply</AccessText>
        </Access>
        <BtnBox>
          <PostTypes>
            <TypeBtn src="https://cdn.icon-icons.com/icons2/2348/PNG/512/image_picture_icon_143003.png" />
            <TypeBtn src="https://cdn-icons-png.flaticon.com/512/6535/6535091.png" />
            <TypeBtn src="https://w7.pngwing.com/pngs/369/931/png-transparent-smiley-computer-icons-emoticon-icon-design-smiley-miscellaneous-face-desktop-wallpaper.png" />
            <TypeBtn src="data:image/png;base64,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" />
          </PostTypes>
          <PostBtn type="submit">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </PostBtn>
        </BtnBox>
      </PostForm>
    </Wrapper>
  );
}
