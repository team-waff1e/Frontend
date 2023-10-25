import { useCallback, useState } from "react";
import { Wrapper, Title, Form, Input } from "../components/signup-form";

export default function Signup() {
  const [signupInputs, setSignupInputs] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
  const { email, username, password, passwordConfirm, nickname } = signupInputs;
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
      username === "" ||
      password === "" ||
      passwordConfirm === "" ||
      nickname === ""
    )
      return;
    try {
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
          value={username}
          name="username"
          placeholder="username"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <Input
          onChange={onChange}
          value={passwordConfirm}
          name="passwordConfirm"
          placeholder="password confirm"
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
        <Input type="submit" value="Create Account" required />
      </Form>
    </Wrapper>
  );
}
