import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 53px 1fr;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

export const MenuList = styled.div`
  diplay: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #505050;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const MenuContent = styled.div`
  font-size: 16px;
`;

export const MenuRightArrowIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${({ src }) => src});
  background-size: contain;
`;
