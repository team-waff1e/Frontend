import { Outlet, Link } from "react-router-dom";

export default function Waffle() {
  return (
    <>
      <div>
        <h1>Waffles</h1>
      </div>
      <nav>
        <h2>WafflesNav</h2>
        <ul>
          <li>
            <Link to={`/waffles/1`}>게시물 조회, 수정, 삭제</Link>
          </li>
          <li>
            <Link to={`/waffles/like`}>좋아요</Link>
          </li>
          <li>
            <Link to={`/waffles/unlike`}>좋아요 취소</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>컴포넌트: 게시물 등록, 게시물 리스트 조회</p>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
