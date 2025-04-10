
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

const Home = () => {
  return (
    <div className="home-container">
        <div className='page-wrapper'>
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <img src="/profile.jpg" alt="Danah's Profile" className="profile-pic" />
      <p className="home-subtitle">Full Stack Developer • Creative Problem Solver</p>
    </div>
    </div>
  );
};

export default Home;
