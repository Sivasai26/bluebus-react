// src/AuthPage.js
import React, { useState } from 'react';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => setIsSignIn(!isSignIn);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isSignIn && !name)) {
      alert('Please fill all fields');
      return;
    }

    // Save the name to localStorage on sign up
    if (!isSignIn) {
      localStorage.setItem('bluebusUserName', name);
    }

    // Simulate login success and redirect
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          )}
          <button type="submit">{isSignIn ? 'Login' : 'Register'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-link">
          {isSignIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
