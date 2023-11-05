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
import AddMember from "../apis/add-member";
import { debounce } from "lodash";
import Modal from "../components/modal";
import CheckDup from "../apis/check-dup";

export default function Signup() {
  // Debounce 메세지 상태 관리
  const [DupMsg, setDupMsg] = useState({
    emailValidMsg: "",
    isEmailValid: false,
    nicknameValidMsg: "",
    isNicknameValid: false,
  });
  const { emailValidMsg, isEmailValid, nicknameValidMsg, isNicknameValid } =
    DupMsg;
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
          const errorCode = await CheckDup({ name, value });
          const { isValid, msg } = SetErrorMsg({ errorCode, name, value });
          if (name === "email") {
            setDupMsg({
              ...DupMsg,
              emailValidMsg: msg,
              isEmailValid: isValid,
            });
          } else if (name === "nickname") {
            setDupMsg({
              ...DupMsg,
              nicknameValidMsg: msg,
              isNicknameValid: isValid,
            });
          }
        } catch (e) {
          console.log(e);
        }
      }, 500),
    [DupMsg]
  );

  // 입력값 상태 관리
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    pwd: "",
    pwdConfirm: "",
    nickname: "",
  });
  const { email, name, pwd, pwdConfirm, nickname } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
      if (name === "email" || name === "nickname") {
        onDebounce({ name, value });
      }
    },
    [inputs, onDebounce]
  );

  // 모달 상태 관리
  const [isModal, setIsModal] = useState(false);

  // 회원가입 요청
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailError = await CheckDup({ name: "email", value: email });
    const nicknameError = await CheckDup({ name: "nickname", value: nickname });
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
        console.log("signup succeed");
        // 사용한 State 초기화, 모달 띄우고 Home으로 navigate
        setInputs({
          email: "",
          name: "",
          pwd: "",
          pwdConfirm: "",
          nickname: "",
        });
        setDupMsg({
          emailValidMsg: "",
          isEmailValid: false,
          nicknameValidMsg: "",
          isNicknameValid: false,
        });
        setIsModal(true);
      } else if (errorCode !== 201) {
        alert("Check your signup form");
        console.log("signup failed");
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
        {emailValidMsg ? (
          <ErrorMsg>
            {isEmailValid ? (
              <Valid>{emailValidMsg}</Valid>
            ) : (
              <Invalid>{emailValidMsg}</Invalid>
            )}
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
          type="password"
          required
        />
        <Input
          onChange={onChange}
          value={pwdConfirm}
          name="pwdConfirm"
          placeholder="pwd confirm"
          type="password"
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
        {nicknameValidMsg ? (
          <ErrorMsg>
            {isNicknameValid ? (
              <Valid>{nicknameValidMsg}</Valid>
            ) : (
              <Invalid>{nicknameValidMsg}</Invalid>
            )}
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
