import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(false);

  const requestLogout = () => setShowBanner(true);

  const confirmLogout = () => {
    try {
      localStorage.removeItem('authToken');
    } catch (e) {
      // ignore
    }
    setShowBanner(false);
    navigate('/login');
  };

  const cancelLogout = () => setShowBanner(false);

  return (
    <>
      <nav className="app-nav">
        <div className="nav-inner">
          <div className="nav-brand">MyApp</div>
          <div className="nav-links">
            <NavLink to="/dashboard" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Dashboard</NavLink>
            <button className="nav-logout" onClick={requestLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {showBanner && (
        <div className="logout-banner">
          <div className="logout-banner-inner">
            <p className="logout-message">Are you sure you want to logout?</p>
            <div className="logout-actions">
              <button className="btn btn-outline" onClick={cancelLogout}>Cancel</button>
              <button className="btn btn-primary" onClick={confirmLogout}>Yes, logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
