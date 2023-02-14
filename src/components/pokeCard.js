import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={`/${pokemon?.name}.png`} alt='charmander, the fire type starter from generation one' />
                    <h2>{pokemon?.name}</h2>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PokeCard;