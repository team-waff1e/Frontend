import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 1px rgb(255, 240, 199) solid;
  border-bottom: none;
`;

export const BackgroundImg = styled.div`
  grid  
  background-color: #e5e5e5;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Header = styled.div`
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 135px;
  height: 135px;
  border: 5px white solid;
  border-radius: 70px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const EditBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  background-color: white;
  border: 1px #e5e5e5 solid;
  border-radius: 20px;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Nickname = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #5e5e5e;
`;

export const JoinedDate = styled.p`
  font-size: 18px;
  color: #5e5e5e;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DateIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const FollowLinks = styled.div`
  disply: flex;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: #707070;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

export const FollowNum = styled.span`
  color: black;
  font-weight: 600;
`;
