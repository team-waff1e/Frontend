import { useParams } from "react-router";
import styled from "styled-components";
import WaffleDetail from "../components/waffles/waffle-detail";
import CreateComment from "../components/comments/create-comment";
import CommentList from "../components/comments/comment-list";

const Wrapper = styled.div`
  grid-column: 2/3;
  margin: 10px 0px;
`;

// 현재 페이지로 오게되면 axios로 통신하여 현재 waffle의 id를 넘기고,
// 받아온 데이터를 postSlice 에 저장한다. 이후 해당 정보를 이용해서 화면에 출력.
// => 수정페이지에서 정보를 재사용할 것이기 때문에 useState보다 redux 에 저장하는게 더 좋을듯?
export default function Waffle() {
  const { waffleId } = useParams();

  return (
    <Wrapper>
      <WaffleDetail waffleId={waffleId} />
      <CreateComment waffleId={waffleId} />
      <CommentList waffleId={waffleId} />
    </Wrapper>
  );
}
