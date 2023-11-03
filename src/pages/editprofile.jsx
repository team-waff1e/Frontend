import {
  Wrapper,
  Title,
  Form,
  Input,
  Switcher,
  ErrorMsg,
  Valid,
} from "../components/signup-form";
import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEdits, setEmail, setName, setNickname, setPwd, setPwdConfirm } from "../store/userEditSlice";
import { storeUserInfo } from "../store/userInfoSlice";



export default function EditProfile() {
  const dispatch = useDispatch();
  const { email, name, nickname, } = useSelector((state) => {
    return state.userInfo;
  })
  
  function LoadUser (){
    dispatch(setEmail(email))
    dispatch(setName(name))
    dispatch(setNickname(nickname))
  }
  
  
  
  const { editEmail, editName, editNickname, editPwd, editPwdConfirm } = useSelector((state) => {
    return state.userEdit;
  })

  useEffect(()=>{
      LoadUser()
  }, [])
  
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "name") {
      dispatch(setName(value))
    } else if (name === "nickname") {
      dispatch(setNickname(value))
    } else if (name === "pwd") {
      dispatch(setPwd(value))
    } else if (name === "pwdConfirm") {
      dispatch(setPwdConfirm(value))
    }
  } , [])

  const onSubmit = useCallback( async (e) => {
    e.preventDefault();
    const editNicknameError = await CkDuplication({
      name: "nickname",
      value: nickname,
    });

    // 유효성 검사(공백, pwd 확인, 이메일&닉네임 중복)
    if (
      editEmail === "" ||
      editName === "" ||
      editPwd === "" ||
      editPwdConfirm === "" ||
      nickname === "" ||
      editPwd !== editPwdConfirm ||
      editNicknameError !== 200
    ) {
      return;
    }

    try {
      const errorCode = await EditMember({ editEmail, editName, editPwd, editNickname });
      if (errorCode === 201) {
        // 성공시
        console.log("success");
        dispatch(storeUserInfo({
          email : editEmail,
          name : editName,
          pwd : editPwd,
          pwdConfirm : editPwdConfirm,
          nickname : editNickname,
        })) 
        // state 값들 초기화 후 홈으로 이동(유저 정보 저장은 로그인을 해야함)
        // 회원가입 성공시 로그인 안내 모달을 띄워줌
        // => 추후 response의 로그인 데이터 기반으로 입력하는 함수로 빼기
        dispatch(clearEdits());
        setIsModal(true);
      } else if (errorCode !== 201) {
        alert("Check your information form");
        console.log("failed");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  })


  return (
    <Wrapper>
      
      <Title>Change Personal Information</Title>
      <Form onSubmit ={onSubmit}>
        email : 
        <Input
          value={editEmail}
          name="email"
          placeholder="Email"
          type="text"
          required
        />
        name : 
        <Input
          onChange={onChange}
          value={editName}
          name="name"
          placeholder="Name"
          type="text"
          required
        />
        nickname : 
        <Input
          onChange={onChange}
          value={editNickname}
          name="nickname"
          placeholder="nickname"
          type="text"
          required
        />
        pwd :
        <Input
          onChange={onChange}
          value={editPwd}
          name="pwd"
          placeholder="New Password"
          type="password"
          required
        />
        pwd confirm :
        <Input
          onChange={onChange}
          value={editPwdConfirm}
          name="pwdConfirm"
          placeholder="Confirm Password"
          type="password"
          required
        />

          <ErrorMsg>
            <Valid>Valid</Valid>
          </ErrorMsg>
        <Input type="submit" value="Update Information" />
      </Form>
      <Switcher>
        <Link to="/members/{member.id}">Back to Profile</Link>
      </Switcher>
    </Wrapper>
  );
}
