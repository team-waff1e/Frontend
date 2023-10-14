import { Outlet, Link } from "react-router-dom";

export default function Post() {
  return (
    <>
      <div>
        <h1>Posts</h1>
      </div>
      <nav>
        <h2>PostsNav</h2>
        <ul>
          <li>
            <Link to={`/waffles/1/comments`}>댓글 등록</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>컴포넌트: 게시물 조회(단일), 게시물 수정, 게시물 삭제</p>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
