import styled from "styled-components";

export const Wrapper = styled.div``;

export const Backdrop = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
`;

export const TextSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Text = styled.p`
  margin: 0px;
  color: #732c00;
`;

export const BtnSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px 25px 0px;
  gap: 20px;
`;

export const Btn1 = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  background-color: #f0cb8c;
  color: #732c00;
`;

export const Btn2 = styled.button`
  border: 2px #f0cb8c solid;
  border-radius: 20px;
  padding: 10px 30px;
  background-color: white;
  color: #732c00;
`;
