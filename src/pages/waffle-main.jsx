import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav";

export default function WaffleMain() {
  return (
    <div>
      <div className="sidenav">
        <Sidenav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
