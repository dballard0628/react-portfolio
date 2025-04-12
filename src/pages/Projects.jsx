import React from 'react';

const projects = [
  {
    name: 'First Project "Horoscoop"',
    url: 'https://github.com/Pricilla-Francis/Project-1.git',
    description: 'My first group project! We created an app previously called "The Melt Down" but has now been renamed "Horoscoop".'
  },
  {
    name: 'Second Project "Munchmap"',
    url: 'https://github.com/Pricilla-Francis/Project-2.git',
    description: 'My second group project! We created an app called "Munchmap" where we used the love for food and brought it to social media.'
  },
  {
    name: 'Portfolio Website',
    url: 'https://github.com/dballard0628/react-portfolio.git',
    description: 'My personal portfolio site built with React and Vite.'
  },
  {
    name: 'Vehicle Builder',
    url: 'https://github.com/dballard0628/car-canvas.git',
    description: 'A typescript command-line app that builds vehicles for users.'
  },
  {
    name: 'Task Tracker',
    url: 'https://github.com/dballard0628/Sky-Insights.git',
    description: 'A weather dashboard that was created using an api key to get real time weather reports from all around.'
  }
];

const Projects = () => {
  return (
    <section className="page-wrapper">
      <div style={{ padding: '2rem', maxWidth: '800px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((project, index) => (
            <li key={index} style={{ backgroundColor: '#fceaea', padding: '1rem', marginBottom: '1rem', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
              <p>{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  backgroundColor: '#bc8f8f',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginTop: '0.5rem'
                }}
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
