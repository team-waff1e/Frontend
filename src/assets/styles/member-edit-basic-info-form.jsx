import styled from "styled-components";

export const InputList = styled.form`
  diplay: flex;
  flex-direction: column;
  position: relative;
  margin: 0px 15px;
`;

export const SaveBtn = styled.button`
  font-size: 16px;
  padding: 5px 20px;
  border: none;
  border-radius: 20px;
  background-color: #f0cb8c;
  color: #732c00;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 15px 0px;
`;
