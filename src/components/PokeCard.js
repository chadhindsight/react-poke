import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Moves from './PokemonInfo/Moves';
import Types from './PokemonInfo/Types';
import { CardActions, CardMedia, Typography } from '@mui/material';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {

    return (

        <Card>
            <CardContent>
                <CardMedia
                    sx={{ height: 350, width: 350 }}
                    image={`/images/${pokemon?.name}.png`}
                    title={`${pokemon?.name}, one of the starters from generation one`}
                    style={{ paddingTop: "1 rem" }}
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
                        <CardActions>
                            <Button onClick={() => getPokemonInfo(pokemon.url)}>Learn More</Button>
                        </CardActions>
                }
            </CardContent>
        </Card>
    );
};

export default PokeCard;
