import { useCallback, useState } from "react";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Switcher,
  ErrorMsg,
  Valid,
  Invalid,
} from "../components/signup-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeUserInfo } from "../store/userInfoSlice";
import AddMember from "../apis/addMember";
import CkDuplication from "../apis/ckDuplication";
import { debounce } from "lodash";
import {
  setEmailVM,
  setIsEmailV,
  setIsNnmV,
  setNnmVM,
} from "../store/signupValidSlice";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { emailVM, isEmailV, nnmVM, isNnmV } = useSelector((state) => {
    return state.signupValid;
  });

  // Debounce
  function SetErrorMsg({ errorCode, name, value }) {
    if (errorCode === 200) {
      if (name === "email") {
        dispatch(setIsEmailV(true));
        if (value) {
          dispatch(setEmailVM("This email is not being used."));
        } else {
          dispatch(setEmailVM(""));
        }
      } else if (name === "nickname") {
        dispatch(setIsNnmV(true));
        if (value) {
          dispatch(setNnmVM("This nickname is not being used."));
        } else {
          dispatch(setNnmVM(""));
        }
      }
    } else if (errorCode !== 200) {
      if (name === "email") {
        dispatch(setIsEmailV(false));
        if (value) {
          dispatch(setEmailVM("This email is already in use."));
        } else {
          dispatch(setEmailVM(""));
        }
      } else if (name === "nickname") {
        dispatch(setIsNnmV(false));
        if (value) {
          dispatch(setNnmVM("This nickname is already in use."));
        } else {
          dispatch(setNnmVM(""));
        }
      }
    }
  }
  const onDebounce = useCallback(
    debounce(async ({ name, value }) => {
      try {
        const errorCode = await CkDuplication({ name, value });
        SetErrorMsg({ errorCode, name, value });
      } catch (e) {
        console.log(e);
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
        onDebounce({ name, value });
      }
    },
    [setSignupInputs, onDebounce]
  );

  // 회원가입 요청
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailError = await CkDuplication({
      name: "email",
      value: email,
    });
    const nicknameError = await CkDuplication({
      name: "nickname",
      value: nickname,
    });
    // 유효성 검사(공백, pwd 확인, 이메일&닉네임 중복)
    if (
      email === "" ||
      name === "" ||
      pwd === "" ||
      pwdConfirm === "" ||
      nickname === "" ||
      pwd !== pwdConfirm ||
      emailError !== 200 ||
      nicknameError !== 200
    ) {
      return;
    }
    try {
      const errorCode = await AddMember({ email, name, pwd, nickname });
      if (errorCode === 201) {
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
      } else if (errorCode !== 201) {
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
        {emailVM ? (
          <ErrorMsg>
            {isEmailV ? <Valid>{emailVM}</Valid> : <Invalid>{emailVM}</Invalid>}
          </ErrorMsg>
        ) : null}
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
        {nnmVM ? (
          <ErrorMsg>
            {isNnmV ? <Valid>{nnmVM}</Valid> : <Invalid>{nnmVM}</Invalid>}
          </ErrorMsg>
        ) : null}
        <Input type="submit" value="Create Account" />
      </Form>
      <Switcher>
        Already have an account? <Link to="/login">Log In &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
