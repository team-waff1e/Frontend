import { useCallback, useState } from "react";
import {
  InputList,
  SaveBtn,
  BtnBox,
} from "../../assets/styles/member-edit-basic-info-form";
import { Title, Wrapper } from "../../assets/styles/member-edit-nav-form";
import MemberEditBasicInfoInputItem from "./member-edit-basic-info-input-item";
import styled from "styled-components";

const ProfileImgLabel = styled.label`
  z-index: 1;
  width: 100px;
  height: 100px;
  position: relative;
  border: 1px solid black;
  border-radius: 50px;
  background-image: url(${({ src }) => src});
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ProfileImgIcon = styled.img`
  z-index: 0;
  width: 50px;
  position: absolute;
  left: 25px;
  top: 25px;
`;

const ProfileImgInput = styled.input`
  display: none;
`;

export default function MemberEditBasicInfo({
  title,
  profileImg,
  tags,
  btnText = "Save",
  type,
  checkPwd,
}) {
  // 입력값 관리
  const [inputs, setInputs] = useState({});
  const onChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setInputs({
        ...inputs,
        [id]: value,
      });
    },
    [inputs]
  );
  // 현재 사용자 정보 불러와서 inputs에 입력하기

  // 1. 이미지 업로드 관련 로직
  // 이미 이미지가 있다면, 해당 이미지 표시 // 없다면 기본 이미지 표시

  // 이미지 파일 선택 시 미리보기 표시

  // onSubmit 로직 (axios 통신)

  // Btn 타입 나중에 submit으로 수정 (새로고침때문에 해놓음)
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (type === "protection") {
        checkPwd(true);
      } else {
      }
    },
    [type, checkPwd]
  );
  return (
    <Wrapper>
      <Title>{title}</Title>
      <InputList onSubmit={onSubmit}>
        {profileImg && (
          <ProfileImgLabel for="profile-img">
            <ProfileImgIcon src="https://cdn-icons-png.flaticon.com/512/5218/5218413.png" />
            <ProfileImgInput id="profile-img" type="file" accept="image/*" />
          </ProfileImgLabel>
        )}
        {tags.map((tag) => {
          return (
            <MemberEditBasicInfoInputItem
              key={tag}
              tag={tag}
              content={inputs[tag]}
              onChange={onChange}
            />
          );
        })}
        <BtnBox>
          <SaveBtn type="submit">{btnText}</SaveBtn>
        </BtnBox>
      </InputList>
    </Wrapper>
  );
}
