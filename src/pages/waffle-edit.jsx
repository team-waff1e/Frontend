import styled from "styled-components";
import CreatePost from "../components/create-post";
import { useParams } from "react-router-dom";

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
