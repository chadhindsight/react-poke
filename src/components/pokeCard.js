import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {
    return (
        <Col>
            {/* <Card>
                <img src={`/${pokemon.name}.png`} alt='charmander, the fire type starter from generation one' />
                <Card.Body>
                    <p>{pokemon.name}</p>
                </Card.Body>
            </Card> */}
        </Col>
    );
};

export default PokeCard;