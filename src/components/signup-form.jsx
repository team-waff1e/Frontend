import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 420px;
  min-width: 420px;
  margin-top: 5%;
  padding: 50px 0px 10px 0px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #732c00;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0px 5px 0px;
  border: 1px solid #f0cb8c;
  border-radius: 50px;
  &[type="submit"] {
    background-color: #f0cb8c;
    color: #732c00;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Switcher = styled.span`
  margin-top: 10px;
  a {
    color: #1d9bf0;
  }
`;

export const ErrorMsg = styled.div`
  display: block flow;
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
`;

export const Valid = styled.p`
  color: #00aaff;
  margin: 0;
`;

export const Invalid = styled.p`
  color: #dc143c;
  margin: 0;
`;
