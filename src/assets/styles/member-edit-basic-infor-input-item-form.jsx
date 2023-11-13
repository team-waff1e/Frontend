import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  margin-top: 15px;
`;

export const InputItem = styled.div`
  height: 55px;
  position: relative;
  border: 1px solid #f0cb8c;
  border-radius: 5px;
`;

export const InputItemTag = styled.div`
  height: 55px;
  font-size: 22px;
  color: #707070;
  position: absolute;
  padding: 10px 0px 0px 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0px 15px;
  margin-top: 25px;
  &:focus {
    outline: none;
  }
`;
