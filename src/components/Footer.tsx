import React from "react";
import { Link } from "react-router-dom";
// import ContactMe from "../pages/contactme";







const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className = "home-buttons">
                {/* <div className="links" style={{ display: "flex", justifyContent: "space-between", width: "70%", color: "orange" }}> */}
                    {/* <div className="home-buttons"> */}
                        <Link to="/advice" className="home-button">Advice</Link>
                        <Link to="/projects" className="home-button">Projects</Link>
                        <Link to="/contactme" className="home-button">Contact</Link>
                        <Link to="/blog" className="home-button">Blog</Link>
                    {/* </div> */}
                {/* </div> */}
            </footer >
        </>
    );
};

export default Footer;