import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  border: 1px solid rgb(255, 240, 199);
  border-top: none;
  padding: 10px;
`;

export const ProfileImg = styled.img`
  grid-column: 1/2;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 5px;
`;

export const CommentForm = styled.form`
  grid-column: 2/3;
  display: flex;
  align-items: end;
`;

export const Comment = styled.textarea`
  flex: 1;
  height: 50px;
  max-height: 500px;
  font-size: 20px;
  border: none;
  resize: none;
  padding: 5px 10px;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentBtn = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: #f0cb8c;
  color: #732c00;
`;
