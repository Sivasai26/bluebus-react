import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('bluebusUserName');
    if (storedName) setUserName(storedName);
  }, []);

  const handleHomeClick = () => navigate('/');
  const handleAboutClick = () => navigate('/about');
  const handleContactClick = () => navigate('/contact');
  const handleMyBookingsClick = () => navigate('/mybookings');

  const handleSignOut = () => {
    localStorage.removeItem('bluebusUserName');
    setUserName('');
    navigate('/'); // Optional: Redirect to homepage after signout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        {userName && (
          <h2 className="welcome-message" style={{ textAlign: 'center', margin: '10px 0', color: '#00bcd4' }}>
            Hello, {userName}
          </h2>
        )}
      </div>

      <div className="menu">
        <ul className="nav-links">
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={handleAboutClick}>About</li>
          <li onClick={handleMyBookingsClick}>My Bookings</li>
          <li onClick={handleContactClick}>ContactUs</li>
        </ul>

        {/* Sign In / Sign Out Toggle */}
        {userName ? (
          <button onClick={handleSignOut} className="log-in" style={{ background: 'red', color: '#fff' }}>
            Sign Out
          </button>
        ) : (
          <Link to="/auth">
            <h3 className="log-in">Sign Up</h3>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
