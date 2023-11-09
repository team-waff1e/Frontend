import axios from "axios";
import { POST_URL } from "../apis/urls";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaffle } from "../store/wafflesSlice";
import {
  Author,
  Contents,
  Footer,
  Header,
  HeaderBtn,
  MenuBtn,
  Profile,
  ProfileImg,
  Subscribe,
  Text,
  Title,
  ToggleBox,
  ToggleItem,
  Wrapper,
} from "./waffle-detail-form";
import {
  Nickname,
  PostDate,
  FooterItem,
  FooterIcon,
  FooterInfo,
} from "./waffle-item-form";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";

export default function WaffleDetail({ waffleId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상태 불러오기
  const { content, likes, createdAt, memberId } = useSelector((state) => {
    return state.waffles.selectedPost;
  });
  const user = useSelector((state) => {
    return state.user;
  });

  // 토글기능
  const [isToggled, setIsToggled] = useState(false);
  const inSection = useRef();
  const onToggle = useCallback((e) => {
    setIsToggled((prev) => !prev);
  }, []);
  useEffect(() => {
    const clickOutside = (e) => {
      if (isToggled && !inSection.current.contains(e.target)) {
        setIsToggled(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isToggled]);

  // 삭제 확인 모달
  const [isModdaled, setIsModaled] = useState();
  const confirmDelete = useCallback((e) => {
    setIsModaled((prev) => !prev);
  }, []);

  // 편집 창으로 Link
  const toEdit = useCallback(
    (e) => {
      navigate(`/waffles/${waffleId}/edit`);
    },
    [waffleId, navigate]
  );

  useEffect(() => {
    const getWaffle = async () => {
      const response = await axios.get(POST_URL + `/${waffleId}`);
      const { errorCode } = response.data;
      if (errorCode === 200) {
        const { instance } = response.data;
        dispatch(selectWaffle(instance));
      } else if (errorCode !== 200) {
        console.log(errorCode);
      }
    };
    getWaffle();
  }, [waffleId, dispatch]);

  return (
    <Wrapper>
      {isModdaled && (
        <Modal
          texts={["Are you sure to delete this waffle?"]}
          link1="/waffles"
          link2={`/waffles/${waffleId}`}
          method="deleteWaffle"
          args={{ waffleId, setIsModaled }}
        />
      )}
      <Header>
        <ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMLq7qLjd3tJE_MxbQzSk5BGng5SXecU82AVzphYuloDHl-cVyTYOiLiGRwDF9jZ1Fig&usqp=CAU" />
        <Profile>
          <Title>
            <Nickname>Nickname</Nickname>
            <Author>Author</Author>
          </Title>
          <HeaderBtn>
            <Subscribe>Subscribe</Subscribe>
            <MenuBtn
              onClick={onToggle}
              src="https://www.svgrepo.com/show/124304/three-dots.svg"
            />
            {isToggled && (
              <ToggleBox onBlur={onToggle} ref={inSection}>
                {memberId === user.memberId ? (
                  <>
                    <ToggleItem onClick={toEdit}>Edit waffle</ToggleItem>
                    <ToggleItem onClick={confirmDelete}>
                      Delete waffle
                    </ToggleItem>
                  </>
                ) : (
                  <>
                    <ToggleItem>Follow Author</ToggleItem>
                  </>
                )}
              </ToggleBox>
            )}
          </HeaderBtn>
        </Profile>
      </Header>
      <Contents>
        <Text>{content}</Text>
        <PostDate>{createdAt}</PostDate>
      </Contents>
      <Footer>
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
    </Wrapper>
  );
}
