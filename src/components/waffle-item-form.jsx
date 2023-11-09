import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  border: 1px solid rgb(255, 240, 199);
  border-top: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(226, 226, 226, 0.3);
  }
`;

export const Contents = styled.div`
  gird-colum: 2/3;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Header = styled.div`
  width: 514px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;
  max-width: 500px;
  font-size: 14px;
`;

export const Nickname = styled.p`
  font-weight: 600;
  margin: 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const Author = styled.p`
  color: #707070;
  margin: 0px;
  cursor: pointer;
`;

export const PostDate = styled.p`
  color: #707070;
  margin: 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #707070;
  }
`;

export const Text = styled.p`
  width: 514px;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Images = styled.div`
  width: 514px;
  height: 514px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #e5e5e5;
  background-image: url(${(props) => props.src});
  background-size: contain;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = styled.div`
  width: 514px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-right: 10px;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 5px;
  background-color: white;
  border: 2px solid black;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 15px;
`;

export const FooterInfo = styled.p`
  font-size: 14px;
  margin: 0px 10px;
`;
