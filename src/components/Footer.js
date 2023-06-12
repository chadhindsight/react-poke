import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Person from '@mui/icons-material/Person';
import Github from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <BottomNavigation sx={{ width: 600 }} className="foot">
            <BottomNavigationAction
                label="Github"
                value="Chad's Github Profile"
                icon={<Github />}
                target="_blank"
                href='https://github.com/chadhindsight'
                rel="noreferrer"
            />
            {/* Bottom buttons */}
            <BottomNavigationAction
                label="LinkedIn"
                value="Chad's LinkedIn"
                icon={<LinkedIn />}
                target="_blank"
                href='https://www.linkedin.com/in/chadrick-hinds'
                rel="noreferrer"
            />
            <BottomNavigationAction
                label="Portfolio"
                value=" Chad's Portfolio"
                icon={<Person />}
                target="_blank"
                href='https://chadhindsight.github.io/'
                rel="noreferrer"
            />
        </BottomNavigation>
    );
};

export default Footer;