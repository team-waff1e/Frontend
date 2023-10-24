import { Form, Input, Title, Wrapper } from "../components/signup-form";

export default function Signup() {
  return (
    <Wrapper>
      <Title>Signup</Title>
      <Form>
        <Input name="email" placeholder="email" type="text" required />
        <Input name="username" placeholder="username" type="text" required />
        <Input
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <Input
          name="passwordConfirm"
          placeholder="password confirm"
          type="password"
          required
        />
        <Input name="nickname" placeholder="nickname" type="text" required />
        <Input type="submit" value="제출" required />
      </Form>
    </Wrapper>
  );
}
