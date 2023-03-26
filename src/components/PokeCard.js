import React from 'react';
// import { Container, Button, Col, Card } from 'react-bootstrap';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Moves from './PokemonInfo/Moves';
import Types from './PokemonInfo/Types';
import { CardMedia, Grid, Typography } from '@mui/material';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {

    return (

        <Card>
            <CardContent>
                <CardMedia
                    sx={{ height: 350, width: 350 }}
                    image={`/${pokemon?.name}.png`}
                    title={`${pokemon?.name}, one of the starters from generation one`}
                />
                <hr />
                <Typography gutterBottom variant="h4" component="div">
                    {pokemon?.name.toUpperCase()}
                </Typography>

                {
                    selectedPokemon?.name === pokemon?.name ?
                        <>
                            <Moves moves={selectedPokemon?.moves} />
                            <hr />
                            <Types types={selectedPokemon?.types} />
                        </>
                        :
                        <Button onClick={() => getPokemonInfo(pokemon.url)}>Learn More</Button>
                }
            </CardContent>
        </Card>
    );
};

export default PokeCard;
