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
import { setEmail, setName, setNickname, setPwd, setPwdConfirm } from "../store/userEditSlice";
import { storeUserInfo } from "../store/userInfoSlice";



export default function EditProfile() {
  const dispatch = useDispatch();
  const { email, name, nickname } = useSelector((state) => {
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

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    
    dispatch(storeUserInfo({
      email : editEmail,
      name : editName,
      pwd : editPwd,
      nickname : editNickname,
    })) 
  })


  return (
    <Wrapper>
      
      <Title>Change Personal Information</Title>
      <Form>
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
