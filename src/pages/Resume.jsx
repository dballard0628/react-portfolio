import React from 'react';

function Resume() {
  return (
    <div className="page-wrapper" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Century Gothic, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Danah Ballard</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        📧 <a href="mailto:dball@email.com">dball@email.com</a>
      </p>

      <section>
        <h2>Objective</h2>
        <p>
          Aspiring Full Stack Web Developer with a passion for building responsive, user-friendly applications and a strong
          foundation in JavaScript, React, Node.js, and PostgreSQL. Currently enrolled in a full stack development bootcamp and
          eager to contribute to innovative and impactful projects as part of a dynamic development team.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, HTML5, CSS, SQL</li>
          <li><strong>Frameworks/Libraries:</strong> React, Node.js, Express.js, Bootstrap</li>
          <li><strong>Databases:</strong> PostgreSQL, MongoDB (basics)</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Heroku, Netlify</li>
          <li><strong>Other:</strong> RESTful APIs, Responsive Design, Agile Methodologies</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>Full Stack Web Development Bootcamp</strong><br />
        University of Central Florida – In Progress<br />
        Expected Completion: [June 2025]</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Horoscoop</strong> – 
            <a href="https://github.com/Pricilla-Francis/Project-1.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            Horoscope-based app. Worked on front-end functionality with HTML/CSS/JS.
          </li>
          <li>
            <strong>MunchMap</strong> – 
            <a href="https://github.com/Pricilla-Francis/Project-2.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            Food & social media mash-up built with React, Node.js, and PostgreSQL.
          </li>
          <li>
            <strong>Portfolio Website</strong> – 
            <a href="https://github.com/dballard0628/react-portfolio.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            React + Vite portfolio to showcase projects and skills.
          </li>
          <li>
            <strong>Vehicle Builder CLI</strong> – 
            <a href="https://github.com/dballard0628/car-canvas.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            A TypeScript CLI app to build vehicles from user prompts.
          </li>
          <li>
            <strong>Sky Insights</strong> – 
            <a href="https://github.com/dballard0628/Sky-Insights.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            Real-time weather dashboard powered by API calls.
          </li>
        </ul>
      </section>

      <section>
        <h2>Soft Skills</h2>
        <ul>
          <li>Creative Problem Solver</li>
          <li>Team Collaborator</li>
          <li>Detail-Oriented</li>
          <li>Quick Learner</li>
          <li>Empathetic Communicator</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
