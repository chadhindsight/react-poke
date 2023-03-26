import React from 'react';
import Button from "@mui/material/Button";

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="http://chadhindsight.github.io" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">My Portfolio Site</a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/chadrick-hinds" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">Linkedin</a></li>
                <li className="nav-item"><a href="https://github.com/chadhindsight" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">Github</a></li>
            </ul>
            <p className="text-center text-muted">© {new Date().getFullYear()} Chad Hinds</p>
        </footer>
    );
};

export default Footer;