import { useNavigate } from "react-router-dom";
import { Profile, ProfileImg } from "../../assets/styles/create-post-form";
import {
  Author,
  Contents,
  Footer,
  FooterIcon,
  FooterInfo,
  FooterItem,
  Header,
  Nickname,
  PostDate,
  Text,
  Title,
  Wrapper,
} from "../../assets/styles/waffle-item-form";
import { useCallback } from "react";
import { MenuBtn } from "../../assets/styles/waffle-detail-form";
import { useDispatch, useSelector } from "react-redux";

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
  author = "xorb269",
  // 현재 있는 입력값들
  postId,
  content,
  createdAt,
  likes,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentUserLiked = useSelector((state) => {
    // 현재 사용자가 이 게시물을 좋아요 했는지 확인
    return state.selectedPost.likes.some((like) => like.memberId === state.user.id);
  });

  // Waffle detail 페이지로 이동 => 나중에 깔끔하게 수정해보기
  const toDetail = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        navigate(`/waffles/${postId}`);
      }
    },
    [navigate, postId]
  );



  // 프로필 이미지 클릭시 프로필 화면으로 Link 되도록 하기
    const toProfile = () => {
      navigate(`/members/${author}`);
    };


  // 좋아요 클릭시 좋아요 axios post 로직 짜기
  const handleLike = () => {
    dispatch(likeWaffle({postId, isLiked: currentUserLiked}));
  }
  return (
    <Wrapper>
      <Profile onClick={toProfile}>
        <ProfileImg src={profileImg} />
      </Profile>
      <Contents onClick={toDetail}>
        <Header onClick={toDetail}>
          <Title>
            <Nickname>{nickname}</Nickname>
            <Author>&#64; {author} &#183;</Author>
            <PostDate>{createdAt}</PostDate>
          </Title>
          <MenuBtn src="https://www.svgrepo.com/show/124304/three-dots.svg" />
        </Header>
        <Text onClick={toDetail}>{content}</Text>
        <Footer onClick={toDetail}>
          <FooterItem>
            <FooterIcon 
            src={currentUserLiked
              ? "data:image/png;base64,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"
              : "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-heart-shape-image_1199003.jpg"}
            onClick={handleLike}
            />
            <FooterInfo>{likes}</FooterInfo>
          </FooterItem>
        </Footer>
      </Contents>
    </Wrapper>
  );
}
