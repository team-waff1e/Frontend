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

export default function Login() {
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInputs;
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
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    try {
      navigate("/waffles");
    } catch (e) {
    } finally {
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
          value={password}
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <Input type="submit" value="Log In" required />
      </Form>
      <Switcher>
        Don't have an account? <Link to="/signup">Create one &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
