import { useNavigate, useParams } from "react-router-dom";
import {
  MenuContent,
  MenuItem,
  MenuList,
  MenuRightArrowIcon,
  Title,
  Wrapper,
} from "./member-edit-nav-form";
import { useCallback } from "react";

export default function MemberEditNav() {
  const navigate = useNavigate();
  const { memberId } = useParams();

  // 비밀번호 확인 로직 필요
  const onClick = useCallback(
    (e) => {
      const { to } = e.currentTarget.dataset;
      navigate(to);
    },
    [navigate]
  );
  return (
    <Wrapper>
      <Title>Settings</Title>
      <MenuList>
        <MenuItem
          onClick={onClick}
          data-to={`/members/${memberId}/edit/basicInfo`}
        >
          <MenuContent>Change User Informations</MenuContent>
          <MenuRightArrowIcon src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></MenuRightArrowIcon>
        </MenuItem>
        <MenuItem
          onClick={onClick}
          data-to={`/members/${memberId}/edit/profileImg`}
        >
          <MenuContent>Change Profile Image</MenuContent>
          <MenuRightArrowIcon src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></MenuRightArrowIcon>
        </MenuItem>
      </MenuList>
    </Wrapper>
  );
}
