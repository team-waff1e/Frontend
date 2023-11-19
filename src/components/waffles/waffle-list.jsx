import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaffles } from "../../store/wafflesSlice";
import fetchPosts from "../../apis/fetch-posts";
import WaffleItem from "./waffle-item";

const WaffleList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.waffles);
  const containerRef = useRef();

  useEffect(() => {
    const loadPosts = async () => {
      dispatch(fetchWaffles(await fetchPosts()));
    };
    loadPosts();
  }, [dispatch]);

  const handleIntersection = (entries) => {
    const container = entries[0].target;
    if (entries[0].isIntersecting) {
      // 요소가 화면에 나타났을 때 다음 페이지의 포스트를 불러옴
      fetchMorePosts();
    }
  };

  const fetchMorePosts = async () => {
    // 새로운 페이지를 불러오는 로직
    const newPosts = await fetchPosts();
    // 새로운 포스트를 리덕스 스토어에 디스패치
    dispatch(fetchWaffles(newPosts));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport를 기준으로 함
      rootMargin: "0px",
      threshold: 0.5, // 0.5 이상이 되면 콜백 호출 (요소의 50% 이상이 화면에 나타났을 때)
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  // 최대 25개 게시물만 렌더링
  const limitedPosts = posts.slice(0, 25);

  return (
    <div ref={containerRef} style={{ overflowY: "scroll", maxHeight: "500px" }}>
      {limitedPosts.map((post) => (
        <WaffleItem key={post.postId} {...post} />
      ))}
    </div>
  );
};

export default WaffleList;
