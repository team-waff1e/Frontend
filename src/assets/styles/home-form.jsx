import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  min-width: 420px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #732c00;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5%;
  padding: 50px 0px;
  gap: 10px;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px 20px;
  background-color: #f0cb8c;
  color: #732c00;
  border: 1px solid #f0cb8c;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
