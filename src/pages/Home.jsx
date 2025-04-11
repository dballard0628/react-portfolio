import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="page-wrapper">
                <header className="home-header">
                    <h1 className="home-title">Welcome to My Portfolio</h1>
                    <img src="/profile.jpg" alt="Danah's Profile" className="profile-pic" />
                    <p className="home-subtitle">Full Stack Developer • Creative Problem Solver</p>
                </header>
                
                <section className="home-description-container">
                    <p className="home-description">
                        Hi! I'm Danah, a 32-year-old aspiring software engineer from sunny Miami, Florida. I'm currently enrolled in a full stack web development bootcamp, where I am sharpening my skills in technologies like JavaScript, React, Node.js, Express, and PostgreSQL.

                        After years of exploring different career paths, I discovered my passion for coding and problem-solving. Whether it's building sleek front-end interfaces or designing efficient back-end systems, I love creating things that are both functional and meaningful.

                        My journey into tech has been fueled by curiosity, determination, and a deep desire to make an impact. As I continue to grow as a developer, I'm excited to collaborate on innovative projects, learn from industry professionals, and contribute to the ever-evolving world of web development.

                        When I’m not coding, you’ll probably find me exploring the local vinyl spots, diving into tech podcasts, or making good use of my Disney annual pass.

                        Let’s build something great together! 💻🌴
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;
