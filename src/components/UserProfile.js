import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className="stats">
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
      </div>
    </div>
  );
};

export default UserProfile;