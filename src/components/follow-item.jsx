import { Author, Contents } from "./waffle-item-form";
import { Profile, ProfileImg } from "./create-post-form";
import { Title } from "./waffle-detail-form";
import {
  Description,
  FollowBtn,
  Header,
  Nickname,
  Wrapper,
} from "./follow-item-form";

export default function FollowItem({ memberId }) {
  // 프로필 이미지 클릭시 프로필 화면으로 Link 되도록 하기

  // 1. following 상태일 경우
  // following mouse over event 걸어서 unfollow로 텍스트 대체되록 하기

  // unfollow 클릭시 언팔로우 => 확인 모달 띄운 후 확인시, axios 통신 + 표시되는 리스트에서 제거

  // 2. following 상태가 아닌 경우(ex. follower 페이지 중 맞팔 아닌경우)
  // follow 버튼 표시되도록 하고, 클릭시 axios 통신 + following 리스트에 추가

  return (
    <Wrapper>
      <Profile>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
      </Profile>
      <Contents>
        <Header>
          <Title>
            <Nickname>nickname of {memberId}</Nickname>
            <Author>@name of {memberId}</Author>
          </Title>
          <FollowBtn>following</FollowBtn>
        </Header>
        <Description>description</Description>
      </Contents>
    </Wrapper>
  );
}
