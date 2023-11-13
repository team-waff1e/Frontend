import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MiddleNav from "../components/navs/middle-nav";
import FollowList from "../components/members/follow-list";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px rgb(255, 240, 199) solid;
  margin: 10px 0px;
`;

export default function Follows() {
  const { state } = useLocation();
  const { memberId } = useParams();

  // 초기 버튼 설정
  const [isFollowing, setIsFollowing] = useState(true);
  useEffect(() => {
    setIsFollowing(state.initialState);
  }, [state.initialState]);
  const [btns, setBtns] = useState([
    { name: "following", display: "block" },
    { name: "followers", display: "none" },
  ]);
  useEffect(() => {
    if (isFollowing) {
      setBtns([
        { name: "following", display: "block" },
        { name: "followers", display: "none" },
      ]);
    } else {
      setBtns([
        { name: "following", display: "none" },
        { name: "followers", display: "block" },
      ]);
    }
  }, [isFollowing]);

  // axios 통신으로 팔로우 관련 정보 받아오기 => api: /members/:memberId/follow
  console.log(memberId);

  // 나중에는 following 에 따라 type을 다르게 하는 것이 아니라 넘겨주는 데이터를 다르게 하도록 설정
  return (
    <Wrapper>
      <MiddleNav btns={btns} type="follow" args={{ setIsFollowing }} />
      {isFollowing ? (
        <FollowList type="following" />
      ) : (
        <FollowList type="followers" />
      )}
    </Wrapper>
  );
}
