import React from 'react';

function Contactme() {
  return (
    <div className="page-wrapper">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect!</h2>

      
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}></p>

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Let's chat..." />

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
