import React from 'react';
import logo from '../Poke-logo.svg';

const Header = () => {
    return (
        <div className="container">
            <img src={logo} className="img-fluid App-logo" alt="Pokeball" width='70px' />
        </div>
    );
};

export default Header;