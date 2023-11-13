import styled from "styled-components";
import { useParams } from "react-router-dom";
import CreatePost from "../components/waffles/create-post";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

export default function WaffleEdit() {
  const { waffleId } = useParams();

  return (
    <Wrapper>
      <CreatePost waffleId={waffleId} type="edit" />
    </Wrapper>
  );
}
