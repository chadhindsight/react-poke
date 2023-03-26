import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Person from '@mui/icons-material/Person';
import Github from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        // <footer className="py-3 my-4">
        //     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        //         <li className="nav-item"><a href="http://chadhindsight.github.io" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">My Portfolio Site</a></li>
        //         <li className="nav-item"><a href="https://www.linkedin.com/in/chadrick-hinds" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">Linkedin</a></li>
        //         <li className="nav-item"><a href="https://github.com/chadhindsight" target="_blank" rel='noreferrer' className="nav-link px-2 text-muted">Github</a></li>
        //     </ul>
        //     <p className="text-center text-muted">© {new Date().getFullYear()} Chad Hinds</p>
        // </footer>
        <BottomNavigation sx={{ width: 500 }} className="foot">
            <hr />
            <BottomNavigationAction
                label="LinkedIn"
                value="LinkedIn"
                icon={<LinkedIn />}
                target="_blank"
                href='https://www.linkedin.com/in/chadrick-hinds'
                rel="noreferrer"
            />
            <BottomNavigationAction
                label="Github"
                value="Chad's Github"
                icon={<Github />}
                target="_blank"
                href='https://github.com/chadhindsight'
                rel="noreferrer"
            />
            <BottomNavigationAction
                label="Portfolio"
                value="Portfolio"
                icon={<Person />}
                target="_blank"
                href='https://chadhindsight.github.io/'
                rel="noreferrer"
            />
        </BottomNavigation>
    );
};

export default Footer;