import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  cursor: pointer;
  &:hover {
    background-color: rgba(226, 226, 226, 0.3);
  }
`;

export const Header = styled.div`
  width: 514px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nickname = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const FollowBtn = styled.button`
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  background-color: white;
  border: 1px #e5e5e5 solid;
  border-radius: 20px;
  padding: 0px 15px;
  cursor: pointer;
  &:hover {
    color: red;
    font-size: 16px;
    background-color: #e5e5e5;
  }
`;

export const Description = styled.p`
  margin: 0;
  margin-left: 5px;
`;
