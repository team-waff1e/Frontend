import { useNavigate } from "react-router-dom";
import { Profile, ProfileImg } from "./create-post-form";
import {
  Author,
  Contents,
  Footer,
  FooterIcon,
  FooterInfo,
  FooterItem,
  Header,
  Image,
  Images,
  MenuBtn,
  Nickname,
  PostDate,
  Text,
  Title,
  Wrapper,
} from "./waffle-item-form";
import { useCallback } from "react";

// 나중에 아이콘들 asset으로 빼기 => 다운로드 받아서 넣어놓기
// 나중에 기본값 넣어논거 제거하고, waffles 페이지에서 map 함수 + prop으로 받아와서 구성하기
// 버튼만 넣어논거 페이지, 기능 구현하기 => 라우팅 수정, 페이지 추가 제작 필요
// 게시물 바디의 빈 곳(or content)을 누르면 게시물 상세페이지로 이동하는 로직 짜놈.
// => 좀 더러운데 깔끔하게 할 방법 있는지...
// => target, currentTarget 속성 이용해서 빈 곳을 클릭했을 때만 이동하도록 한다.
// => 이름, 아이디, 프로필, 버튼을 눌렀을 경우에는 해당에 맞는 기능을 하도록
// 프로필로 이동하는 버튼의 경우, 넘겨 줄 props 재성이와 상의하기
// 메뉴바 토글 구현 => 화이팅
// 이미지 블럭 캐러셀 구현 => 화이팅
export default function WaffleItem({
  // 설정에 없는 입력값들
  profileImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU",
  nickname = "KTaeGyu",
  // images = [],

  // 현재 있는 입력값들
  postId = 0,
  content = "I want to go home...",
  createdAt = "Nov 1",
  likes = 0,
  memberId = "xorb269",
}) {
  const navigate = useNavigate();
  const toDetail = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        navigate(`/waffles/${postId}`);
      }
    },
    [navigate, postId]
  );
  return (
    <Wrapper>
      <Profile onClick={toDetail}>
        <ProfileImg src={profileImg} />
      </Profile>
      <Contents onClick={toDetail}>
        <Header onClick={toDetail}>
          <Title>
            <Nickname>{nickname}</Nickname>
            <Author>&#64; {memberId} &#183;</Author>
            <PostDate>{createdAt}</PostDate>
          </Title>
          <MenuBtn src="https://cdn-icons-png.flaticon.com/512/6059/6059003.png" />
        </Header>
        <Text onClick={toDetail}>{content}</Text>
        {/* <Images onClick={toDetail}>
          {images.map((image, idx) => (
            <Image onClick={toDetail} key={idx} src={image} />
          ))}
        </Images> */}
        <Footer onClick={toDetail}>
          <FooterItem>
            <FooterIcon src="https://cdn-icons-png.flaticon.com/512/5219/5219868.png" />
            <FooterInfo>210</FooterInfo>
          </FooterItem>
          <FooterItem>
            <FooterIcon src="https://cdn.icon-icons.com/icons2/510/PNG/512/loop_icon-icons.com_50105.png" />
            <FooterInfo>1.4k</FooterInfo>
          </FooterItem>
          <FooterItem>
            <FooterIcon src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-heart-shape-image_1199003.jpg" />
            <FooterInfo>{likes}</FooterInfo>
          </FooterItem>
          <FooterItem>
            <FooterIcon src="https://cdn.icon-icons.com/icons2/1898/PNG/512/chart_121012.png" />
            <FooterInfo>2.7M</FooterInfo>
          </FooterItem>
          <FooterItem>
            <FooterIcon src="https://cdn.icon-icons.com/icons2/3931/PNG/512/bookmarks_icon_250582.png" />
          </FooterItem>
          <FooterItem>
            <FooterIcon src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg" />
          </FooterItem>
        </Footer>
      </Contents>
    </Wrapper>
  );
}
