import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Member() {
  return (
    <div>
      <h1>Member</h1>
      <Link to="/waffles">와플로</Link>
      <Outlet />
    </div>
  );
}
