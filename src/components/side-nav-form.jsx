import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: 1/2;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
