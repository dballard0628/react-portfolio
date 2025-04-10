import React from "react";
import { Link } from "react-router-dom";
// import ContactMe from "../pages/contactme";







const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer style={{ border: "1px solid black", width: "100%", position: "fixed", height: "6rem", bottom: 0, display: "flex", justifyContent: "center" }}>
                <div className="links" style={{ display: "flex", justifyContent: "space-between", width: "70%", color: "orange" }}>
                     <div className="home-buttons">
                            <Link to="/about" className="home-button">About Me</Link>
                            <Link to="/projects" className="home-button">Projects</Link>
                            <Link to="/contactme" className="home-button">Contact</Link>
                            <Link to="/github" className="home-button">Github</Link>
                          </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <a href="https://twitter.com" className="text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-700">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://facebook.com" className="text-blue-600">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;