import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Member from "./member";
import Follow from "../components/follow";
import UserProfile from "../components/userProfile"
export default function Members() {


  // 통신 시 사용할 코드 예상
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const [profileUser, setProfileUser] = useState(null);
  // const [isFollowing, setIsFollowing] = useState(false);
    // // useEffect를 사용하여 데이터 가져오기
    // useEffect(() => {
    //   // 현재 로그인한 사용자 정보 가져오기
    //   fetch('API_URL/loggedInUser')
    //     .then((response) => response.json())
    //     .then((data) => setLoggedInUser(data))
    //     .catch((error) => console.error('Error fetching logged in user:', error));
  
    //   // 프로필 페이지의 사용자 정보 가져오기
    //   fetch('API_URL/profileUser')
    //     .then((response) => response.json())
    //     .then((data) => setProfileUser(data))
    //     .catch((error) => console.error('Error fetching profile user:', error));
    // }, []);


    // const onFollowClick = (profileUserId) => {
    //   // 실제 팔로우 API 호출 (백엔드에서 구현해야 함)
    //   // 예시: 백엔드 API 호출
    //   fetch(`API_URL/followUser/${profileUserId}`, {
    //     method: isFollowing ? 'DELETE' : 'POST', // 팔로우/언팔로우 동작에 따라 메서드 변경
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ loggedInUserId: loggedInUser.id }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setIsFollowing(!isFollowing); // 팔로우 상태 업데이트
    //     })
    //     .catch((error) => console.error('Error following/unfollowing user:', error));
    // };

    


  const [loggedInUser, setLoggedInUser] = useState({
      id: 1,
      name : "js",
      email: "eeeee", 
      pwd: "pwpwpwpw", 
      follower : 5, 
      following: 3, 
      user_created_date : "2021.10.23", 
    });
  
  const [profileUser, setProfileUser] = useState({
      id: 2,
      name : "da",
      email: "ddddd", 
      pwd: "pwpwpwpw", 
      follower : 10, 
      following: 8, 
      user_created_date : "2022.10.23", 
    });
  



  const [isFollowing, setIsFollowing] = useState(false);

  // const onFollowClick = (profileUser) => {
  //     // 실제 팔로우 또는 언팔로우 API 호출 (백엔드에서 구현해야 함)
  //     // 예시: 백엔드 API 호출
  //     if (isFollowing) {
  //       // Unfollow
  //       // 백엔드에서 프로필 유저의 팔로워 수 감소 및 로그인 유저의 팔로우 목록에서 제거 등
  //       setProfileUser((prevUser) => ({
  //         ...prevUser,
  //         followers: prevUser.followers - 1,
  //       }));
  //     } else {
  //       // Follow
  //       // 백엔드에서 프로필 유저의 팔로워 수 증가 및 로그인 유저의 팔로우 목록에 추가 등
  //       setProfileUser((prevUser) => ({
  //         ...prevUser,
  //         followers: prevUser.followers + 1,
  //       }));
  //     }
  //     setIsFollowing(!isFollowing); // 팔로우 상태 업데이트
  //   };

const onFollowClick = (profileUser) => {
      // 실제 팔로우 또는 언팔로우 로직을 구현해야 하지만, 여기서는 상태만 변경하는 예시입니다.
      if (isFollowing) {
        // Unfollow
        const updatedProfileUser = {
          ...profileUser,
          follower: profileUser.follower - 1,
        };
        setProfileUser(updatedProfileUser);
        setIsFollowing(false);
      } else {
        // Follow
        const updatedProfileUser = {
          ...profileUser,
          follower: profileUser.follower + 1,
        };
        setProfileUser(updatedProfileUser);
        setIsFollowing(true);
      }
    };







//  useEffect(() => {
    // console.log(state.useRInfo);
//    console.log("email:", email, pwd);
//  }, []);
  
//  function handleButton() {
    // if () {
      
    // }
//    setLoginInfo((prev) => ({
//    ...prev,
//      follower: prev.follower +1
//    }));

//  }






  // if (!loggedInUser || !profileUser) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <UserProfile
        user={profileUser}
        loggedInUser={loggedInUser}
        onFollowClick={onFollowClick}
        isFollowing={isFollowing}
        profileUser={profileUser}
      />
    </div>
  );
}