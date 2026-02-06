import React, { useEffect, useState } from 'react';
import '../../styles/Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/me", {
      method: "GET",
      credentials: "include", // 🔥 VERY IMPORTANT (session)
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
    return <p>Loading dashboard...</p>;
  }

  if (!user) {
    return <p>Please login first.</p>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-content">
        <aside className="profile-card">
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
        </aside>

        <main className="dashboard-main">
          <section className="card">
            <h3>Welcome</h3>
            <p className="muted">
              Welcome back, {user.firstName}!
            </p>
          </section>

          <section className="card">
            <h3>Activity</h3>
            <p className="muted">No recent activity.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
