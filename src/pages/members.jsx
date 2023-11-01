import { useState } from "react";
import UserProfile from "../components/userProfile";

export default function Members() {
  const [loggedInUser, setLoggedInUser] = useState({
    id: 1,
    email: "email1",
    name: "name1",
    nickname: "nick1",
    follower: 5,
    following: 3,
    user_created_date: "2021.10.23",
    pwd: "pwpwpwpw",
  });

  const [profileUser, setProfileUser] = useState({
    id: 2,
    email: "email2",
    name: "name2",
    nickname: "nick2",
    follower: 10,
    following: 8,
    user_created_date: "2022.10.23",
    pwd: "pwpwpwpw",
  });

  const [isFollowing, setIsFollowing] = useState(false);

  const onFollowClick = ({ id }) => {
    if (isFollowing) {
      const updatedProfileUser = {
        ...profileUser,
        follower: profileUser.follower - 1,
      };
      setProfileUser(updatedProfileUser);
      const updatedLoggedInUser = {
        ...loggedInUser,
        following: loggedInUser.following - 1,
      };
      setLoggedInUser(updatedLoggedInUser);
      setIsFollowing(false);
    } else {
      const updatedProfileUser = {
        ...profileUser,
        follower: profileUser.follower + 1,
      };
      setProfileUser(updatedProfileUser);
      const updatedLoggedInUser = {
        ...loggedInUser,
        following: loggedInUser.following + 1,
      };
      setLoggedInUser(updatedLoggedInUser);
      setIsFollowing(true);
    }
  };

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
