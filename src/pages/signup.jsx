import { useCallback, useMemo, useState } from "react";
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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddMember from "../apis/add-member";
import CkDuplication from "../apis/ck-duplication";
import { debounce } from "lodash";
import {
  clearSignupV,
  setEmailVM,
  setIsEmailV,
  setIsNnmV,
  setNnmVM,
} from "../store/signupValidSlice";
import { setIsClicked } from "../store/homeClickSlice";
import Modal from "../components/modal";

export default function Signup() {
  const dispatch = useDispatch();

  // Debounce
  const { emailVM, isEmailV, nnmVM, isNnmV } = useSelector((state) => {
    return state.signupValid;
  });
  function SetErrorMsg({ errorCode, name, value }) {
    if (errorCode === 200) {
      if (name === "email") {
        if (value) {
          return { isValid: true, msg: "This email is not being used." };
        } else {
          return { isValid: true, msg: "" };
        }
      } else if (name === "nickname") {
        if (value) {
          return { isValid: true, msg: "This nickname is not being used." };
        } else {
          return { isValid: true, msg: "" };
        }
      }
    } else if (errorCode !== 200) {
      if (name === "email") {
        if (value) {
          return { isValid: false, msg: "This email is already in use." };
        } else {
          return { isValid: false, msg: "" };
        }
      } else if (name === "nickname") {
        if (value) {
          return { isValid: false, msg: "This nickname is already in use" };
        } else {
          return { isValid: false, msg: "" };
        }
      }
    }
    return;
  }
  const onDebounce = useMemo(
    () =>
      debounce(async ({ name, value }) => {
        try {
          const errorCode = await CkDuplication({ name, value });
          const { isValid, msg } = SetErrorMsg({ errorCode, name, value });
          if (name === "email") {
            dispatch(setIsEmailV(isValid));
            dispatch(setEmailVM(msg));
          } else if (name === "nickname") {
            dispatch(setIsNnmV(isValid));
            dispatch(setNnmVM(msg));
          }
        } catch (e) {
          console.log(e);
        }
      }, 500),
    [dispatch]
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

  // 모달
  const [isModal, setIsModal] = useState(false);

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
        // state 값들 초기화 후 홈으로 이동(유저 정보 저장은 로그인을 해야함)
        // 회원가입 성공시 로그인 안내 모달을 띄워줌
        // => 추후 response의 로그인 데이터 기반으로 입력하는 함수로 빼기
        setSignupInputs({
          email: "",
          name: "",
          pwd: "",
          pwdConfirm: "",
          nickname: "",
        });
        dispatch(clearSignupV());
        dispatch(setIsClicked(false));
        setIsModal(true);
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
      {isModal ? (
        <Modal
          texts={["Your account have successfully created.", "Please log in."]}
          link1="/"
          isBtn2={false}
        />
      ) : null}
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
