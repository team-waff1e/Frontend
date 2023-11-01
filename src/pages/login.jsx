import { useCallback, useState } from "react";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Switcher,
} from "../components/signup-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginReq from "../apis/login-req";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../store/userInfoSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 입력값 상태관리
  const [loginInputs, setLoginInputs] = useState({ email: "", pwd: "" });
  const { email, pwd } = loginInputs;
  const onChang = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLoginInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setLoginInputs]
  );

  // 로그인 요청
  const onSubmit = async (e) => {
    e.preventDefault();
    // 유효성 검사(공백)
    if (email === "" || pwd === "") return;
    try {
      // 회원 정보 확인
      const LoginInfo = await LoginReq({ email, pwd });
      const { errorCode } = await LoginInfo;
      if (errorCode === 200) {
        // 성공시
        console.log("success");
        // 유저 정보 저장, state 값 초기화 후 이동
        // => 추후 response의 로그인 데이터 기반으로 입력하는 함수로 빼기
        const { email, name, pwd, nickname } = await LoginInfo;
        dispatch(storeUserInfo({ email, name, pwd, nickname }));
        setLoginInputs({ email: "", pwd: "" });
        navigate("/waffles");
      } else if (errorCode !== 200) {
        alert("Check your login informations");
        console.log("failed");
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
          required
        />
        <Input
          onChange={onChang}
          value={pwd}
          name="pwd"
          placeholder="password"
          type="password"
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
