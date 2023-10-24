import axios from "axios";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import store from "../store/store";
import { setErrMessage } from "../store/signupErrorSlice";
import { Link } from "react-router-dom";
import Email from "../pages/auths/email";

function ErrorMsg() {
  // Redux 사용하기
  const dispatch = useDispatch();
  const message = useSelector((state) => {
    return state.signupError.errMessage;
  });

  // react form 만들기
  const [signupInputs, setSignupInputs] = useState({
    emailID: "",
    domain: "",
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
  const { emailID, domain, username, password, passwordConfirm, nickname } =
    signupInputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignupInputs((prevSignupInputs) => ({
        ...prevSignupInputs,
        [name]: value,
      }));
    },
    [setSignupInputs]
  );

  // Axios 통신
  const MEMBERS_URL = "http://localhost:4000/api/member";
  const [members, setMembers] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(MEMBERS_URL);
    setMembers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addUserData = async ({ email, username, password, nickname }) => {
    await axios.post(MEMBERS_URL, { email, username, password, nickname });
    setSignupInputs({
      emailID: "",
      domain: "",
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
    });
    dispatch(setErrMessage("default"));
    fetchData();
  };

  // 유효성 검사
  function CheckDuplicate(type, element) {
    var i = 0;
    while (i < members.length) {
      if (members[i][type] === element) {
        dispatch(setErrMessage(`This ${type} has already registerd.`));
        return;
      }
      i += 1;
    }
    dispatch(setErrMessage("default"));
    return Email;
    // + 토글창으로 사용여부 체크
    // + useState로 체크 여부 확인 + disable 속성 추가
  }
  const retainData = ({
    emailID,
    domain,
    username,
    password,
    passwordConfirm,
    nickname,
  }) => {
    setSignupInputs({
      emailID: emailID,
      domain: domain,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
      nickname: nickname,
    });
  };
  function CheckBlank({ type, element }) {
    if (element === "") {
      dispatch(setErrMessage(`Please fill in the ${type}.`));
      return false;
    }
    return true;
  }
  function CheckLength({ type, element }) {
    console.log(type, element);
    const criteria = {
      emailID: [0, 99],
      domain: [0, 99],
      username: [0, 99],
      password: [8, 20],
      passwordConfirm: [8, 20],
      nickname: [2, 15],
    };
    if (
      element.length < criteria[element][0] ||
      element.length > criteria[element][1]
    ) {
      dispatch(setErrMessage(`Invalid ${type} form`));
      return false;
    }
    return true;
  }
  function CheckPassword({ password, passwordConfirm }) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])/;
    const isValid = passwordRegex.test(password);
    if (!isValid) {
      dispatch(setErrMessage("Missing password requirements"));
      return false;
    } else if (password !== passwordConfirm) {
      dispatch(setErrMessage("Password confirmation does not match"));
      return false;
    }
    return true;
  }

  // 최종 제출
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = signupInputs.emailID + "@" + signupInputs.domain;
    for (let i = 0; i < Object.keys(signupInputs).length; i++) {
      const key = Object.keys(signupInputs)[i];
      const value = signupInputs[key];
      console.log(key, value);
      if (!CheckBlank(key, value)) {
        retainData({
          emailID,
          domain,
          username,
          password,
          passwordConfirm,
          nickname,
        });
        return;
      } else if (!CheckLength(key, value)) {
        retainData({
          emailID,
          domain,
          username,
          password,
          passwordConfirm,
          nickname,
        });
        return;
      }
    }
    if (!CheckPassword({ password, passwordConfirm })) {
      retainData({
        emailID,
        domain,
        username,
        password,
        passwordConfirm,
        nickname,
      });
      return;
    }
    addUserData({ email, username, password, nickname });
  };

  return (
    <div className="container">
      <div
        className="container text-center"
        style={{ width: 500, minWidth: 500 }}
      >
        <div className="border rounded-3 p-4 m-3">
          <h1>Members</h1>
          {members.map((member) => (
            <div key={member.id}>
              <hr />
              <span>email: {member.email} / </span>
              <span>username: {member.username} / </span>
              <span>password: {member.password} /</span>
              <span>nickname: {member.nickname}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="container text-center"
        style={{ width: 500, minWidth: 500 }}
      >
        <div className="text-start px-1 text-danger">{message}</div>
        <form className="border rounded-3 p-4" onSubmit={onSubmit}>
          <h2 className="mb-4">Sign up for Waffle!</h2>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="#"
              name="emailID"
              value={emailID}
              onChange={onChange}
            />
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Domain"
              aria-label="Domain"
              aria-describedby="#"
              name="domain"
              value={domain}
              onChange={onChange}
            ></input>
            <Link
              to={`/auth/signup/email`}
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                CheckDuplicate("email", `${emailID + "@" + domain}`);
              }}
            >
              Check
            </Link>
          </div>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Password confirm"
              aria-label="Password-confirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChange}
            />
          </div>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nickname"
              aria-label="Nickname"
              aria-describedby="#"
              name="nickname"
              value={nickname}
              onChange={onChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="#"
              onClick={() => {
                CheckDuplicate("nickname", nickname);
              }}
            >
              Check
            </button>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="submit">
              Button
            </button>
          </div>
        </form>
        <div className="text-body-tertiary text-start" style={{ fontSize: 12 }}>
          <p>
            *Nicname must be between 2 and 15 characters. <br />
            *Password must be between 8 and 20 characters. And must be composed
            of a combination of numbers, alphabets and special characters (~, !,
            @, #, $, %, ^, &, *).
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SignupForm() {
  return (
    <Provider store={store}>
      <div>
        <ErrorMsg />
      </div>
    </Provider>
  );
}
