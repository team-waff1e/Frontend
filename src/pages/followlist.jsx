import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setFollowers, setFollowing } from '../store/userSlice';
import axios from 'axios';

const UserFollowList = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const followers = useSelector((state) => state.user.followers);
  const following = useSelector((state) => state.user.following);

  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 함수를 정의합니다.
    const fetchDataFromDatabase = async () => {
      try {
        const userResponse = await axios.get(`/api/user/${userId}`);
        const followersResponse = await axios.get(`/api/followers/${userId}`);
        const followingResponse = await axios.get(`/api/following/${userId}`);

        const userData = await userResponse.data;
        const followersData = await followersResponse.data;
        const followingData = await followingResponse.data;

        dispatch(setUser(await userData));
        dispatch(setFollowers(await followersData));
        dispatch(setFollowing(await followingData));
      } catch (error) {
        // 에러 처리를 수행하실 수 있습니다.
        console.error('데이터를 불러오는 동안 에러가 발생했습니다:', error);
      }
    };

    // fetchDataFromDatabase 함수를 호출하여 데이터를 가져옵니다.
    fetchDataFromDatabase();
  }, [dispatch, userId]);

  return (
    <div id="팔로우 팔로워 목록">
      {user && <p>User ID: {user.id}</p>}
      <div id="팔로워 목록">
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.username}</li>
        ))}
      </ul>
      </div>

      <div id="팔로우 목록">
      <h2>Following</h2>
      <ul>
        {following.map((followed) => (
          <li key={followed.id}>{followed.username}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default UserFollowList;
