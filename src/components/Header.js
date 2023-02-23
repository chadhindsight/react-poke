import React from 'react';
import logo from '../Poke-logo.svg';

const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container Header">
                <h1 className="display-4">Pokewall <span><img src={logo} className="img-fluid App-logo center" alt="Pokeball" width='70px' /></span></h1>
                <p className="lead">A place to learn about the original three starter Pokemon.</p>
            </div>
        </div>
    );
};

export default Header;