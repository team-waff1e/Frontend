import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import {
  Wrapper,
  Section,
  Title,
  Form,
  Input,
} from "../assets/styles/home-form";
import { Switcher } from "../assets/styles/signup-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsClicked } from "../store/homeClickSlice";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 로그인 전/후 버튼 표시
  const { email } = useSelector((state) => {
    return state.user;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 화면 전환 기능
  const { isClicked } = useSelector((state) => {
    return state.homeClick;
  });
  const onClick = (e) => {
    const { name, value } = e.target;
    if (value) {
      dispatch(setIsClicked(true));
      navigate(`/${name}`);
    } else {
      dispatch(setIsClicked(false));
      navigate("/");
    }
  };
  // 로그인 정보 저장 (나중에 리덕스로 한번 만저볼 것)
  useEffect(() => {
    if (email !== "") {
      setIsLoggedIn(true);
    } else if (email === "") {
      setIsLoggedIn(false);
    }
  }, [email]);
  // 로그인, 회원가입 페이지에 직접 접근 차단 => 홈화면에서만 접근 가능
  useEffect(() => {
    if (!isClicked) {
      navigate("/");
    }
  }, [isClicked, navigate]);
  // 다른 페이지에서 되돌아 왔을 경우 로그인, 회원가입 버튼 띄워주기
  useEffect(() => {
    dispatch(setIsClicked(false));
  }, [dispatch]);

  return (
    <Wrapper>
      <Section>
        <Title onClick={onClick}>🧇 Waffle it!</Title>
      </Section>
      {isLoggedIn ? (
        <Section>
          <Form>
            <Input
              onClick={onClick}
              type="button"
              name="waffles"
              value="Let's Waffle!"
            />
          </Form>
        </Section>
      ) : (
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
          <Switcher>
            You can browse our web <Link to="/waffles">anonymously &rarr;</Link>
          </Switcher>
        </Section>
      )}
    </Wrapper>
  );
}
