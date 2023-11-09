import React, { useState } from 'react';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = () => {
    const { newPassword, confirmPassword } = formData;
    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  };

  return (
    <div>
      <h1>비밀번호 변경</h1>
      <form>
        <div>
          <label htmlFor="newPassword">새 비밀번호</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            onBlur={handleBlur} // onBlur 이벤트 핸들러를 추가
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">새 비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur} // onBlur 이벤트 핸들러를 추가
          />
        </div>
        {passwordMismatch && (
          <p style={{ color: 'red' }}>새 비밀번호와 확인 비밀번호가 일치하지 않습니다.</p>
        )}
        <button type="submit">비밀번호 변경</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
