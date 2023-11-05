import axios from "axios";
import WaffleItem from "./waffle-item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_URL } from "../apis/urls";
import { fetchWaffles } from "../store/wafflesSlice";

// WaffleItem map 함수로 인자 보내서 화면 구성하기
// 서버에서 받아온 정보 토대로 ~25개 정도 화면에 띄워주기
// => 인피니티 스크롤 or 캐러셀(페이지) 중에 하나 선택해서 추가 구현
export default function PostList() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => {
    return state.waffles;
  });

  const fetchPosts = async () => {
    const postsQuery = await axios.get(POST_URL);
    dispatch(fetchWaffles(postsQuery.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="waffles">
      <WaffleItem />
      {posts.map((post) => (
        <WaffleItem key={post.postId} {...post} />
      ))}
    </div>
  );
}
