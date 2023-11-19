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
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  // 메뉴 버튼이 클릭되었는지와 댓글이 편집 중인지를 추적하는 상태
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // 메뉴 버튼을 클릭했을 때의 핸들러
  const handleMenuBtnClick = () => {
    setIsMenuBtnClicked(!isMenuBtnClicked);
  };

  // 편집 버튼을 클릭했을 때의 핸들러
  const handleEditBtnClick = () => {
    // selectReply 액션을 디스패치하여 상태의 선택된 댓글을 업데이트
    dispatch(selectReply({ id, waffleId, content, createdAt, updatedAt, Member }));
    setIsEditing(true);
    setIsMenuBtnClicked(true);
  };

  // 삭제 버튼을 클릭했을 때의 핸들러
  const handleDeleteBtnClick = () => {
    // deleteReply 액션을 디스패치하여 댓글을 삭제
    dispatch(deleteReply({ id, waffleId, content, createdAt, updatedAt, Member }));
  };

  // 편집 모드를 취소하는 핸들러
  const handleCancelEdit = () => {
    setIsEditing(false);
    setIsMenuBtnClicked(false);
  };

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
        {/* 메뉴 버튼이 클릭된 경우 추가 옵션을 표시 */}
        {isMenuBtnClicked && (
          <div>
            {/* 댓글 소유자에게 수정 및 삭제 옵션을 표시 */}
            {currentUser.id === Member.id && !isEditing && (
              <>
                <button onClick={handleEditBtnClick}>수정</button>
                <button onClick={handleDeleteBtnClick}>삭제</button>
              </>
            )}
            {/* 댓글 소유자가 아닌 경우 팔로우 옵션을 표시 */}
            {currentUser.id !== Member.id && <button>팔로우</button>}
          </div>
        )}
      </Header>

      {/* 편집 중이 아닌 경우 콘텐츠를 표시. */}
      {!isEditing && 
      <Contents>
      <Text>{content}</Text>
    </Contents>}
      {/* 편집 중인 경우 EditComment 컴포넌트를 표시 */}
      {isEditing && (
        <EditComment
          comment={{
            id,
            waffleId,
            content,
            createdAt,
            updatedAt,
            Member,
          }}
          onCancel={handleCancelEdit}
        />
      )}

    </Wrapper>
  );
}