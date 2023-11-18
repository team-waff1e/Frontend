import { useSelector } from "react-redux";
import {
  Header,
  Wrapper,
  Contents,
} from "../../assets/styles/comment-item-form";
import {
  MenuBtn,
  ProfileImg,
  Text,
} from "../../assets/styles/waffle-detail-form";
import {
  Author,
  Nickname,
  PostDate,
  Title,
} from "../../assets/styles/waffle-item-form";
import { editReply, deleteReply } from "../../store/commentsSlice";
import commentDropdown from "./comment-dropdown";

export default function CommentItem({
  // 아직 없는 props
  profileImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU",
  nickname = "KTaeGyu",
  author = "KTG",
  // 있는 props
  id,
  waffleId,
  content,
  createdAt,
  updatedAt,
  Member,
}) {

  //comment-dropdown 을 모달 모음으로 옮겨야 하나?

  // MenuBtn 눌렀을 때 본인이라면 삭제, 수정 버튼/ 타인이라면 follow 버튼 나오게 하는 로직
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);//여기서 currentUser는 현재 로그인한 사용자의 벙보를 담고있는 객체로 볍ㄴ경해줄것

  consst [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false); 

  const handleMenuBtnClick = () => {
    setIsMenuBtnClicked(!isMenuBtnClicked);
  };  
  const handleEditBtnClick = () => {
    // 편집 로직 구현, 예를 들어 플래그 설정이나 편집 모달 열기 등
    // 필요하면 상태를 업데이트하기 위해 액션을 디스패치
    dispatch(editReply({ id, waffleId, content, createdAt, updatedAt, Member }));

  };
  const handleDeleteBtnClick = () => {
    dispatch(deleteReply({ id, waffleId, content, createdAt, updatedAt, Member }));
  };


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
        <MenuBtn src="https://www.svgrepo.com/show/124304/three-dots.svg" onClick={handleMenuBtnClick} />
        {isMenuBtnClicked && (
          <comment-dropdown>
            {currentUser.id === Member.id && (
            <>
              <button onClick={handleEditBtnClick}>수정</button>
              <button onClick={handleDeleteBtnClick}>삭제</button>
            </>
            )}
            {currentUser.id !== Member.id && (
              <button>팔로우</button>
            )}
          </comment-dropdown>
        )}
      </Header>
      <Contents>
        <Text>{content}</Text>
      </Contents>
    </Wrapper>
  );
}
