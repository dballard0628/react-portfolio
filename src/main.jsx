import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import App component
import About from './pages/Advice';
import './index.css'; // Optional: Include global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default About;