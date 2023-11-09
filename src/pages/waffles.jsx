import React from "react";
import styled from "styled-components";
import CreatePost from "../components/create-post";
import WaffleList from "../components/waffle-list";

const Wrapper = styled.div`
  grid-column: 2/3;
  margin: 10px 0px;
`;

const Container = styled.div`
  width: 600px;
`;

// login 안된 유저의 경우 포스팅 컴포넌트 대신 로그인 요청 메세지를 띄워 줄 것.
// 참고 => store userInfo에 로그인 여부를 저장하도록 했음.
export default function Waffles() {
  return (
    <Wrapper>
      <Container>
        <CreatePost type="post" />
        <WaffleList />
      </Container>
    </Wrapper>
  );
}
