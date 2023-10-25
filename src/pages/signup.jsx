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

export default function Signup() {
  const navigate = useNavigate();
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
    },
    [setSignupInputs]
  );
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      pwd === "" ||
      pwdConfirm === "" ||
      nickname === ""
    )
      return;
    try {
      navigate("/waffles");
    } catch (e) {
    } finally {
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
        <Input type="submit" value="Create Account" required />
      </Form>
      <Switcher>
        Already have an account? <Link to="/login">Log In &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
