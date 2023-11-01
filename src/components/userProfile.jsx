export default function UserProfile({
  user,
  loggedInUser,
  onFollowClick,
  isFollowing,
  profileUser,
}) {
  const { email, name, nickname, follower, following, user_created_date } =
    profileUser;
  return (
    <div className="container border">
      <div>
        <header> {name} </header>
        <p> post_count </p>
      </div>
      <div className="border">
        <div className="d-flex justify-content-between">
          <div className="rounded-circle">
            {loggedInUser.id === profileUser.id ? (
              <p>linked_img</p>
            ) : (
              <p>img</p>
            )}
          </div>
          <div className="rounded-pill">
            {loggedInUser.id === profileUser.id ? (
              <button>Edit Profile</button>
            ) : (
              <button onClick={() => onFollowClick(profileUser)}>
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            )}
          </div>
        </div>

        <div className="border d-flex flex-column">
          <div> {email}</div>
          <div>{nickname}</div>
          <div>{user_created_date}</div>

          {
            <div className="d-flex justify-content-start">
              <div>팔로잉 : {following}</div>
              <div>팔로워 : {follower}</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
