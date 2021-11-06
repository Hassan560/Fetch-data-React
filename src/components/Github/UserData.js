import React from "react";
import "../Github/Fetch.css";
function UserData({ user }) {
  return (
    <div>
      {user ? (
        <div className="image-container">
          <img src={user.avatar_url} alt="images" />
          <a href={user.html_url} target="_blank" rel="noreferrer noopener">
            <button className="profile-btn">View Profile</button>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default UserData;
