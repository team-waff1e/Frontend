import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";

//signout, auth 는 auth파트에서 가져온다

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    // signOut(auth);
  };

  return (
    <div >
      <img
        src="https://thumb.mt.co.kr/06/2023/07/2023072417523495654_1.jpg/dims/optimize/"
        alt="Waffle Logo"
      />

      <div >
        <button  >
          <span>홈</span>
        </button>
        <button  >
          <span>검색</span>
        </button>
        <button  >
          <span>메시지</span>
        </button>
        <button >
          <span>알림</span>
        </button>
        <button >
          <span>만들기</span>
        </button>
        <button   onClick={() => setShowDropdown(!showDropdown)}> 
        {/* 드롭다운 메뉴 말고 프로필 화면으로 넘어가야함 */}
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          <span>프로필</span>
          {showDropdown && (
          <div  >
            <button  onClick={handleLogout}>
              Logout
            </button>
            <button >Settings</button>
          </div>
        )}
        </button>
        
      </div>
     
    </div>
  );
}

export default Sidenav;
