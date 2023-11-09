import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false); // 다크 모드 토글 상태
  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 메뉴 열림 상태
  const navigate = useNavigate(); 

  // 다크 모드를 토글하는 함수
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode); // 다크 모드 상태를 변경
    if (isDarkMode) {
      // 다크 모드가 활성화된 경우
      document.documentElement.style.setProperty('--background-color', '#fff'); // 배경 색상을 밝은 색상으로 변경
      document.documentElement.style.setProperty('--text-color', '#333'); // 텍스트 색상을 어두운 색상으로 변경
    } else {
      // 다크 모드가 비활성화된 경우
      document.documentElement.style.setProperty('--background-color', '#333'); // 배경 색상을 어두운 색상으로 변경
      document.documentElement.style.setProperty('--text-color', '#fff'); // 텍스트 색상을 밝은 색상으로 변경
    }
  };

  // 로그아웃을 처리하는 함수
  const handleLogout = () => {
    alert('Logged out!'); // 로그아웃 알림
  };

  // 드롭다운 메뉴 열기/닫기를 처리하는 함수
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // 드롭다운 메뉴 열림 상태를 토글
  };

  // 설정 페이지로 이동하는 함수
  const handleSettings = () => {
    navigate("/settings"); // 설정 페이지로 이동
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link> {/* 홈 페이지로 이동하는 링크 */}
        </li>
        <li>
          <Link to="/profile">Your Profile</Link> {/* 프로필 페이지로 이동하는 링크 */}
        </li>
        <li>
          <button onClick={toggleDropdown}>More</button> {/* "More" 버튼을 클릭하여 드롭다운 메뉴 열기/닫기 */}
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={handleLogout}>Logout</button> {/* 로그아웃 버튼 */}
              <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'} {/* 다크 모드 토글 버튼 */}
              </button>
              <button onClick={handleSettings}>Settings</button> {/* 설정 페이지로 이동하는 버튼 */}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
