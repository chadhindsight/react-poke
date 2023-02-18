import React from 'react';
import { Container, Button, Col, Card } from 'react-bootstrap';
import Moves from './Moves';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {

    return (
        <Container align="center" className="container-sm mt-4">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={`/${pokemon?.name}.png`} alt={`${pokemon?.name}, one of the starters from generation one`} />
                        <h2>{pokemon?.name.toUpperCase()}</h2>
                        <hr />

                        {
                            selectedPokemon?.name === pokemon?.name ?
                                <Moves moves={selectedPokemon?.moves} /> :
                                <Button onClick={() => getPokemonInfo(pokemon.url)}>Learn More</Button>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default PokeCard;