import { useEffect, useState } from "react";
import FollowItem from "./follow-item";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-grow: 1;
  border: 1px rgb(255, 240, 199) solid;
  border-top: none;
`;

export default function FollowList({ type }) {
  // following or followers 상태관리 => 추후 데이터를 넘겨받아 작성할 때에는 지울 부분
  const [follows, setFollows] = useState([]);
  useEffect(() => {
    if (type === "following") {
      setFollows([1, 2]);
    } else {
      setFollows([2]);
    }
  }, [type]);

  // 각 item에 follow list를 순회하며 memberId를 전달
  return (
    <Wrapper>
      {follows.map((follow) => {
        return <FollowItem memberId={follow} />;
      })}
    </Wrapper>
  );
}
