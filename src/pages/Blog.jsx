import React from 'react';
import { Link } from 'react-router-dom';


function Blog() {
  return (
    <section className="page-wrapper">
      <div className="card" style={{ maxWidth: '800px', textAlign: 'left' }}>
        
        <h1>🚀 So You Want to Be a Full Stack Web Developer?</h1>
        <p><em>Here’s What You Should Know</em></p>

        <p>
          The world of full stack web development is booming—and if you're reading this, chances are you're ready to dive in headfirst. Whether you're transitioning careers, fresh out of school, or just curious about coding, welcome. You’re about to enter an exciting, challenging, and incredibly rewarding field.
        </p>

        <h2>🎯 What is a Full Stack Developer Anyway?</h2>
        <p>
          A full stack developer is someone who can build both the <strong>front end</strong> (what users see and interact with) and the <strong>back end</strong> (the logic, database, and server side) of a web application.
        </p>
        <p>At a minimum, full stack developers usually know:</p>
        <ul>
          <li>HTML/CSS/JavaScript for front-end development</li>
          <li>React, Angular, or Vue for front-end frameworks</li>
          <li>Node.js, Express for server-side logic</li>
          <li>Databases like PostgreSQL or MongoDB</li>
          <li>Version control with Git and GitHub</li>
          <li>Working with APIs, authentication, and deployment</li>
        </ul>

        <h2>💡 Getting Started: What You Need</h2>
        <ul>
          <li><strong>Curiosity:</strong> Always be learning and asking “why?”</li>
          <li><strong>Patience:</strong> Debugging is a rite of passage.</li>
          <li><strong>Consistency:</strong> Coding every day—even 30 minutes—helps a ton.</li>
          <li><strong>A Portfolio:</strong> Build real projects that show what you can do.</li>
          <li><strong>Community:</strong> Surround yourself with other learners.</li>
        </ul>

        <h2>🛠 Tools That Will Help You Succeed</h2>
        <ul>
          <li>VS Code</li>
          <li>Terminal/CLI basics</li>
          <li>Chrome DevTools</li>
          <li>Stack Overflow & MDN Web Docs</li>
        </ul>

        <h2>🤔 Why Full Stack?</h2>
        <p>
          Being full stack means flexibility. You can build end-to-end, collaborate better with teams, freelance, or launch your own ideas. Startups especially love full stack developers.
        </p>

        <h2>🌟 Final Thoughts</h2>
        <p>
          The road to becoming a full stack developer is not always easy, but it <strong>is</strong> worth it. You’ll face challenges, but you'll also grow fast and unlock incredible opportunities.
        </p>
        <p><em>Keep building. Keep learning. And remember: Every expert was once a beginner.</em></p>

       
      </div>
    </section>
  );
}

export default Blog;
