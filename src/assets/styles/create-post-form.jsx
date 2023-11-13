import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  border: 1px solid rgb(255, 240, 199);
`;

export const Profile = styled.div`
  grid-column: 1/2;
  padding: 12px;
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  &:hover {
    opacity: 0.7;
  }
`;

export const PostForm = styled.form`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;

export const Post = styled.textarea`
  font-size: 20px;
  padding: 10px;
  height: 50px;
  max-height: 500px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Access = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border: none;
  background-color: transparent;
  padding: 0px 10px;
  border-bottom: 1px solid rgb(255, 240, 199);
`;

export const AccessText = styled.button`
  margin: 0;
  border: none;
  background-color: transparent;
  font-weight: 600;
  color: #00aaff;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 10px;
`;

export const PostTypes = styled.div`
  display: flex;
  gap: 10px;
`;

export const TypeBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const PostBtn = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: #f0cb8c;
  color: #732c00;
`;
