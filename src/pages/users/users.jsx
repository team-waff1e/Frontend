import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div>
        <h1>Users</h1>
      </div>
      <nav>
        <h2>UsersNav</h2>
        <ul>
          <li>
            <Link to={`/users/checkpwd`}>비밀번호 확인</Link>
          </li>
          <li>
            <Link to={`/users/1`}>특정 사용자 정보 조회</Link>
          </li>
          <li>
            <Link to={`/users/follow`}>팔로우 신청</Link>
          </li>
          <li>
            <Link to={`/users/unfollow`}>팔로우 취소 (언팔로우)</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>컴포넌트 : 사용자 정보 조회, 사용자 정보 수정, 사용자 삭제</p>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
