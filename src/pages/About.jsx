import React from 'react';

function About() {
    return (
        <section>
            <div className='page-wrapper'>
            <h2>About Me</h2>
            <p>This is the About page of my portfolio.</p>
            </div>
            <button className="button" onClick={() => navigate('/')}>
         Home
      </button>
        </section>
    );
}

export default About;