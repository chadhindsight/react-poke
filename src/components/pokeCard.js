import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={`/${pokemon?.name}.png`} alt={`${pokemon?.name}, one of the starters from generation one`} />
                    <h2>{pokemon?.name}</h2>
                    <Button onClick={() => getPokemonInfo(pokemon.url)}>Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PokeCard;