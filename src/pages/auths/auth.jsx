import { Outlet, Link } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <div>
        <h1>Auths</h1>
      </div>
      <nav>
        <h2>AuthsNav</h2>
        <ul>
          <li>
            <Link to={`/auth/signup`}>회원 가입</Link>
          </li>
          <li>
            <Link to={`/auth/login`}>로그인</Link>
          </li>
          <li>
            <Link to={`/auth/logout`}>로그아웃</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
