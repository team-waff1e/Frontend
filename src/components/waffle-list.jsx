import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postsSlice";
import WaffleItem from "./waffle-item";

// WaffleItem map 함수로 인자 보내서 화면 구성하기
// 서버에서 받아온 정보 토대로 ~25개 정도 화면에 띄워주기
// => 인피니티 스크롤 or 캐러셀(페이지) 중에 하나 선택해서 추가 구현
export default function PostList() {
  const { posts } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(
      addPost({
        user: "New User",
        postContent: "This is a new post",
        likes: 0,
        timestamp: "1d",
      })
    );
  };
  return (
    <div className="waffles">
      <div>
        <WaffleItem />
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.user}</h2>
            <p>{post.postContent}</p>
            <p>Likes: {post.likes}</p>
            <p>Timestamp: {post.timestamp}</p>
          </div>
        ))}
      </div>
      <button onClick={handleAddPost}>새로운 게시물 추가</button>
    </div>
  );
}
