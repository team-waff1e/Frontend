import { Link } from "react-router-dom";

export default function Waffles() {
  return (
    <div>
      <h1>Waffles</h1>
      <p><Link to="/members/{member.id}">멤버보기</Link></p>
      <p><Link to="/">홈으로</Link></p>
    </div>
  );
}
