import { Header, Wrapper, Contents } from "./comment-item-form";
import { MenuBtn, ProfileImg, Text } from "./waffle-detail-form";
import { Author, Nickname, PostDate, Title } from "./waffle-item-form";

export default function CommentItem({
  // 아직 없는 props
  profileImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU",
  nickname = "KTaeGyu",
  author = "KTG",
  // 있는 props
  content,
  createdAt,
}) {
  return (
    <Wrapper>
      <ProfileImg src={profileImg} />
      <Header>
        <Title>
          <Nickname>{nickname}</Nickname>
          <Author>&#64; {author} &#183;</Author>
          <PostDate>{createdAt}</PostDate>
        </Title>
        <MenuBtn src="https://www.svgrepo.com/show/124304/three-dots.svg" />
      </Header>
      <Contents>
        <Text>{content}</Text>
      </Contents>
    </Wrapper>
  );
}
