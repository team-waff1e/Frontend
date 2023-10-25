import { Wrapper, Title, Form, Input } from "../components/signup-form";

export default function Login() {
  return (
    <Wrapper>
      <Title>Login</Title>
      <Form>
        <Input name="email" placeholder="email" type="text" required />
        <Input
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <Input type="submit" value="제출" required />
      </Form>
    </Wrapper>
  );
}
