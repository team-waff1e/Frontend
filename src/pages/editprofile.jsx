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



export default function EditProfile() {
  const dispatch = useDispatch();
  function LoadUser (){
    const { email, name, nickname } = useSelector((state) => {
      return state.userInfo;
    })
    dispatch(setEmail(email))
    dispatch(setName(name))
    dispatch(setNickname(nickname))
  }
  const { email, name, nickname, pwd, pwdConfirm } = useSelector((state) => {
    return state.userEdit;
  })
  useEffect(()=>{
      LoadUser()
  }, [])
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "name") {
      dispatch(setName(value))
    } else if (nickname === "nickname") {
      dispatch(setNickname(value))
    } else if (pwd === "pwd") {
      dispatch(setPwd(value))
    } else if (pwdConfirm === "pwdConfirm") {
      dispatch(setPwdConfirm(value))
    }
  } , [])
  
  return (
    <Wrapper>
      
      <Title>Change Personal Information</Title>
      <Form>
        email : 
        <Input
          value={email}
          name="email"
          placeholder="Email"
          type="text"
          required
        />
        name : 
        <Input
          onChange={onChange}
          value={name}
          name="name"
          placeholder="Name"
          type="text"
          required
        />
        nickname : 
        <Input
          onChange={onChange}
          value={nickname}
          name="nickname"
          placeholder="nickname"
          type="text"
          required
        />
        pwd :
        <Input
          onChange={onChange}
          value={pwd}
          name="pwd"
          placeholder="New Password"
          type="password"
          required
        />
        pwd confirm :
        <Input
          onChange={onChange}
          value={pwdConfirm}
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
