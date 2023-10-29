import { asyncUpFetch } from "";

function Signup() {
  const MEMBERS_URL = "http://localhost:4000/api/member";
  const SIGNUP_URL = "http://localhost:4000/api/signup";
  const [members, setMembers] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(MEMBERS_URL);
    setMembers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailHead = e.target.email.value;
    const emailTail = e.target.domain.value;
    const email = emailHead + "@" + emailTail;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;
    const nickname = e.target.nickname.value;
    var i = 0;
    while (i < members.length) {
      if (members[i].email === email) {
        dispatch(errorMsgSlice.actions.setPointer("email"));
        dispatch(errorMsgSlice.actions.setContent("test"));
        const response = await axios.get(SIGNUP_URL, {
          email,
          domain,
          username,
          password,
          passwordConfirm,
          nickname,
        });
        setSignupInputs(response.data);
        return;
      }
      i = i + 1;
    }
    await axios.post(MEMBERS_URL, { email, username, password, nickname });
    setSignupInputs({
      email: "",
      domain: "",
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
    });
    fetchData();
  };
}

export default Signup();
