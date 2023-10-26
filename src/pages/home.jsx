import React from "react";
import Sidenav from "../components/Sidenav.jsx";
import Waffles from "./waffles.jsx";

function Home() {
  return (
    <div >
      <div  >
        <Sidenav />
      </div>
      <div  >
        <Waffles />
      </div>
    </div>
  );
}

export default Home;
