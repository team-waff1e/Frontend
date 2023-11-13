import { useCallback, useState } from "react";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Switcher,
} from "../assets/styles/signup-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginReq from "../apis/login-req";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../store/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 입력값 상태관리
  const [inputs, setInputs] = useState({ email: "", pwd: "" });
  const { email, pwd } = inputs;
  const onChang = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // 로그인 요청
  const onSubmit = async (e) => {
    e.preventDefault();
    // 유효성 검사(공백)
    if (email === "" || pwd === "") return;
    try {
      const LoginInfo = await LoginReq({ email, pwd });
      const { errorCode } = await LoginInfo;
      if (errorCode === 200) {
        // 성공시
        console.log("login succeed");
        // 유저 정보 저장, State 값 초기화 후 이동
        // => 추후 response의 로그인 데이터 기반(response.user)으로 입력하는 함수로 빼기
        // => 세션에 로그인 정보(쿠키 저장하는 로직 추가 && 모든 페이지에 새로고침 시 쿠키 기반으로 로그인 유지하는 로직 필요)
        const { memberId, email, name, pwd, nickname } = await LoginInfo;
        dispatch(storeUserInfo({ memberId, email, name, pwd, nickname }));
        setInputs({ email: "", pwd: "" });
        navigate("/waffles");
      } else if (errorCode !== 200) {
        alert("Check your login informations");
        console.log("login failed");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChang}
          value={email}
          name="email"
          placeholder="email"
          type="text"
          autoComplete="email"
          required
        />
        <Input
          onChange={onChang}
          value={pwd}
          name="pwd"
          placeholder="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <Input type="submit" value="Log In" />
      </Form>
      <Switcher>
        Don't have an account? <Link to="/signup">Create one &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
