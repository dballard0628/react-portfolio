import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contactme">Contact</Link>
            <Link to="/github">Github</Link>
        </nav>
    );
}

export default Nav;