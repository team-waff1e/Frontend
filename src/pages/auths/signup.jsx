import { Outlet, Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div>
        <h1>Signup</h1>
      </div>
      <nav>
        <h2>SignupNav</h2>
        <ul>
          <li>
            <Link to={`/auth/signup/nickname`}>닉네임 중복 체크</Link>
          </li>
          <li>
            <Link to={`/auth/signup/email`}>이메일 중복 체크</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>컴포넌트: 회원 가입</p>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
