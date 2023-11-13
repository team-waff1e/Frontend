import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(255, 240, 199);
  border-bottom: none;
  padding: 5px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
`;

export const ProfileImg = styled.img`
  grid-column: 1/2;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 2px;
  margin: 0px 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Profile = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 5px;
`;

export const Author = styled.p`
  color: #707070;
  margin: 0px;
`;

export const HeaderBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`;

export const Subscribe = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #f0cb8c;
  font-size: 14px;
  font-weight: 600;
  color: #732c00;
  margin: 0px;
  padding: 5px 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const MenuBtn = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  padding: 7px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: #e5e5e5;
  }
`;

export const ToggleBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border: 2px #f0cb8c solid;
  border-radius: 10px;
  overflow: hidden;
`;

export const ToggleItem = styled.button`
  background-color: white;
  border: none;
  padding: 5px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  margin: 5px 0px;
`;

export const Text = styled.p`
  font-size: 15px;
  margin: 0px;
`;

export const Images = styled.div`
  width: 100%;
  height: 564px;
  display: flex;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #e5e5e5;
  background-image: url(${(props) => props.src});
  background-size: contain;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  margin: 0px 10px;
  border-top: 1px solid rgb(255, 240, 199);
  border-bottom: 1px solid rgb(255, 240, 199);
`;
