export const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <div className="profile-info">
        <p>{user.bio}</p>
        <div className="stats">
          <span>Posts: {user.posts}</span>
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
        </div>
      </div>
    </div>
  );
};