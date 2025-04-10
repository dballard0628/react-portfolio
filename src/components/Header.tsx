import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyles}>
      <Link to="/" className="home-button">
        Home
      </Link>
    </header>
  );
};

const headerStyles = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'left',
  zIndex: 1000,
};

export default Header;
