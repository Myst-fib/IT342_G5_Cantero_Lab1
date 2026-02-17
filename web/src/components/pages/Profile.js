import React, { useEffect, useState } from 'react';
import '../../styles/Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/me", {
      method: "GET",
      credentials: "include", //VERY IMPORTANT (session)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Not authenticated");
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!user) {
    return <p>Please login first.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="avatar">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="avatar" />
            ) : (
              <div className="avatar-fallback">
                {user.firstName.charAt(0)}
              </div>
            )}
          </div>

          <div className="profile-info">
            <h2 className="profile-name">
              {user.firstName} {user.lastName}
            </h2>
            <p className="profile-email">{user.email}</p>
          </div>

          <div className="profile-actions">
            <button className="btn btn-primary">Edit Profile</button>
            <button className="btn btn-outline">Settings</button>
          </div>
        </div>

        <div className="profile-details">
          <section className="card">
            <h3>Account Information</h3>
            <div className="info-group">
              <label>First Name</label>
              <p>{user.firstName}</p>
            </div>
            <div className="info-group">
              <label>Last Name</label>
              <p>{user.lastName}</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;
