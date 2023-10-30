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
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../store/userInfoSlice";
import AddMember from "../apis/addMember";
import CkEmail from "../apis/ckEmail";
import CkNickname from "../apis/ckNickname";
import { debounce } from "lodash";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Debounce
  const onDebounce = useCallback(
    debounce(async (params) => {
      try {
        console.log("debounced!");
      } catch {
        console.log("no debounce!");
      }
    }, 500),
    []
  );

  // 입력값 상태 관리
  const [signupInputs, setSignupInputs] = useState({
    email: "",
    name: "",
    pwd: "",
    pwdConfirm: "",
    nickname: "",
  });
  const { email, name, pwd, pwdConfirm, nickname } = signupInputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignupInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (name === "email" || name === "nickname") {
        onDebounce();
      }
    },
    [setSignupInputs, onDebounce]
  );

  // 회원가입 요청
  const onSubmit = async (e) => {
    e.preventDefault();
    const errorCode1 = await CkEmail({ email });
    const errorCode2 = await CkNickname({ nickname });
    // 유효성 검사(공백, pwd 확인, 이메일&닉네임 중복)
    if (
      email === "" ||
      name === "" ||
      pwd === "" ||
      pwdConfirm === "" ||
      nickname === "" ||
      pwd !== pwdConfirm ||
      errorCode1 !== 200 ||
      errorCode2 !== 200
    ) {
      return;
    }
    try {
      const errorCode3 = await AddMember({ email, name, pwd, nickname });
      if (errorCode3 === 201) {
        // 성공시
        console.log("success");
        // 유저 정보 저장, state 값들 초기화 후 이동
        // => 추후 response의 로그인 데이터 기반으로 입력하는 함수로 빼기
        dispatch(storeUserInfo({ email, name, pwd, nickname }));
        setSignupInputs({
          email: "",
          name: "",
          pwd: "",
          pwdConfirm: "",
          nickname: "",
        });
        navigate("/waffles");
      } else if (errorCode3 !== 201) {
        alert("Check your signup form");
        console.log("failed");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <Title>Signup to Waffle!</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={email}
          name="email"
          placeholder="email"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          value={name}
          name="name"
          placeholder="name"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          value={pwd}
          name="pwd"
          placeholder="pwd"
          type="pwd"
          required
        />
        <Input
          onChange={onChange}
          value={pwdConfirm}
          name="pwdConfirm"
          placeholder="pwd confirm"
          type="pwd"
          required
        />
        <Input
          onChange={onChange}
          value={nickname}
          name="nickname"
          placeholder="nickname"
          type="text"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
      <Switcher>
        Already have an account? <Link to="/login">Log In &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
