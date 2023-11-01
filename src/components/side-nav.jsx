import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

const Img = styled.img`
  border: none;
  border-radius: 20px;
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-image: url();
  color: white;
  object-fit: cover;
`;

const DropdownBtn = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background-color: black;
  margin-top: 5px;
  color: white;
`;

export default function SideNav() {
  const { user } = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Wrapper>
      <Btn />
      <Img
        src="https://thumb.mt.co.kr/06/2023/07/2023072417523495654_1.jpg/dims/optimize/"
        alt="Waffle Logo"
      />
      <Btn />
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO-WfC0vESQUkDDvBpvV0qeQNHyP57EgHnw&usqp=CAU" />
      <Btn>검</Btn>
      <Btn>메</Btn>
      <Btn>알</Btn>
      <Btn>만</Btn>
      <Btn onClick={() => setShowDropdown(!showDropdown)}>
        {/* 드롭다운 메뉴 말고 프로필 화면으로 넘어가야함 */}
        {user.username ? user.username.charAt(0).toUpperCase() : <Btn>A</Btn>}
        {showDropdown && (
          <>
            <DropdownBtn onClick={handleLogout}>LOGOUT</DropdownBtn>
            <DropdownBtn>SETTINGS</DropdownBtn>
          </>
        )}
      </Btn>
    </Wrapper>
  );
}
