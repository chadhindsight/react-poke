import React from 'react';
import logo from '../Poke-logo.svg';
import { AppBar } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <div className="container Header">
                <h1 className="display-4">Pokewall <span><img src={logo} className="img-fluid App-logo center" alt="Pokeball" width='65px' /></span></h1>
                <p className="lead">A place to learn about the original three starter Pokemon.</p>
            </div>
        </AppBar>
    );
};

export default Header;