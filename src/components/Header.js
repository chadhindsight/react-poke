import React from 'react';
import { AppBar, Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Header = () => {
    return (
        <AppBar position="static">
            <div className="Header">
                <Typography variant='h2'>Pokewall
                    <CatchingPokemonIcon fontSize='inherit' />
                </Typography>
                <Typography variant='h4'>A place to learn about the original three starter Pokemon</Typography>
            </div>
        </AppBar>
    );
};

export default Header;