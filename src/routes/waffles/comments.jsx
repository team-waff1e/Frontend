import { Outlet, Link } from "react-router-dom";

export default function Comments() {
  return (
    <>
      <div>
        <h1>Comments</h1>
      </div>
      <nav>
        <h2>CommentsNav</h2>
        <ul>
          <li>
            <Link to={`/waffles/1/comments/1`}>댓글 조회, 수정, 삭제</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>컴포넌트: 댓글 등록</p>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
