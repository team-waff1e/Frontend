export default function MembersAPI() {
  const MEMBERS_URL = "http://localhost:4000/api/member";
  const [members, setMembers] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(MEMBERS_URL);
    setMembers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
}
