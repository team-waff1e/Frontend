import {
  BackgroundImg,
  DateIcon,
  EditBtn,
  FollowLinks,
  FollowNum,
  Header,
  JoinedDate,
  Name,
  Nickname,
  ProfileImg,
  StyledLink,
  UserInfo,
  Wrapper,
} from "../../assets/styles/profile-form";

export default function Profile({ memberId }) {
  // 본인이 아닌 경우 edit btn 제거 혹은 follow 버튼으로 대체

  // 부모에게 받은 member 정보 props로 받아서 뿌리기 => "" 표시 해놓은 부분들
  return (
    <Wrapper>
      <BackgroundImg src="https://img.freepik.com/free-photo/mysterious-glowing-galaxy-creates-deep-blue-backdrop-generated-by-ai_188544-9577.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais" />
      <UserInfo>
        <Header>
          <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
          <EditBtn to={`/members/${memberId}/settings`}>Edit profile</EditBtn>
        </Header>
        <Nickname>"Nickname"</Nickname>
        <Name>&#64;"Name"</Name>
        <JoinedDate>
          <DateIcon src="https://cdn-icons-png.flaticon.com/512/2983/2983723.png" />
          Joined "Nov 6"
        </JoinedDate>
        <FollowLinks>
          <StyledLink
            to={`/members/${memberId}/follows`}
            state={{ initialState: true }}
          >
            <FollowNum>"1"</FollowNum> Following
          </StyledLink>
          <StyledLink
            to={`/members/${memberId}/follows`}
            state={{ initialState: false }}
          >
            <FollowNum>"10"</FollowNum> Followers
          </StyledLink>
        </FollowLinks>
      </UserInfo>
    </Wrapper>
  );
}
