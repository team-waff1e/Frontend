import styled from "styled-components";
import MiddleNav from "../components/middle-nav";
import { useEffect, useState } from "react";
import FollowList from "../components/follow-list";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  border-top: 1px rgb(255, 240, 199) solid;
  margin: 10px 0px;
`;

export default function Follows() {
  const { state } = useLocation();

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
