import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <h1>Root</h1>
      </div>
      <nav>
        <h2>RootNav</h2>
        <ul>
          <li>
            <Link to={`/waffles`}>Waffle</Link>
          </li>
          <li>
            <Link to={`/auth`}>Auths</Link>
          </li>
          <li>
            <Link to={`/users`}>Users</Link>
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
