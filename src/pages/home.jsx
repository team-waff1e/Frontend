import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import {
  Wrapper,
  Section,
  Title,
  Form,
  Input,
} from "./../components/home-form";

export default function Home() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  // 로그인 <-> 홈 <-> 회원가입 화면 전환 기능
  const onClick = (e) => {
    const { name, value } = e.target;
    if (value) {
      setIsClicked(true);
      navigate(`${name}`);
    } else {
      setIsClicked(false);
      navigate("/");
    }
  };
  // 로그인, 회원가입 페이지에 직접 접근 차단 => 홈화면에서만 접근 가능
  useEffect(() => {
    if (!isClicked) {
      navigate("/");
    }
  });
  return (
    <Wrapper>
      <Section>
        <Title onClick={onClick}>🧇 Waffle it!</Title>
      </Section>
      <Section>
        {isClicked ? (
          <Outlet />
        ) : (
          <Form>
            <Input
              onClick={onClick}
              type="button"
              name="login"
              value="Log In"
            />
            <Input
              onClick={onClick}
              type="button"
              name="signup"
              value="Create Account"
            />
          </Form>
        )}
      </Section>
    </Wrapper>
  );
}
