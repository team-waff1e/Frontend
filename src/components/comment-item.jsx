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
  // MenuBtn 눌렀을 때 본인이라면 삭제, 수정 버튼/ 타인이라면 follow 버튼 나오게 하는 로직

  // 1/ Comment 수정 로직
  // 버튼 클릭시 현재 comment 창이 수정 창으로 변하는 로직

  // 수정 완료 후 axios 통신 및 comment list 수정 하는 로직

  // 2. Comment 삭제 로직 => axios 통신 및 comment list 에서 삭제 하는 로직

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
