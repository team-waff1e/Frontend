import { Header, Wrapper, Contents } from "./comment-item-form";
import { MenuBtn, ProfileImg, Text } from "./waffle-detail-form";
import { Author, Nickname, PostDate, Title } from "./waffle-item-form";

export default function CommentItem() {
  return (
    <Wrapper>
      <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
      <Header>
        <Title>
          <Nickname>Nickname</Nickname>
          <Author>&#64; Author &#183;</Author>
          <PostDate>DateTime</PostDate>
        </Title>
        <MenuBtn src="https://www.svgrepo.com/show/124304/three-dots.svg" />
      </Header>
      <Contents>
        <Text>Reply</Text>
      </Contents>
    </Wrapper>
  );
}
