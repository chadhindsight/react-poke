import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const PokeCard = ({ selectedPokemon, getPokemonInfo, pokemon }) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={`/${pokemon?.name}.png`} alt={`${pokemon?.name}, one of the starters from generation one`} />
                    <h2>{pokemon?.name}</h2>

                    {
                        selectedPokemon?.name === pokemon?.name ?
                            <ul>
                                <hr />
                                <h4>Moves</h4>
                                {selectedPokemon?.moves.slice(0, 5).map((currentItem, i) => {
                                    return <li key={i} style={{ listStyle: 'none' }}>
                                        <Card.Text>{currentItem?.move?.name}</Card.Text>
                                    </li>
                                })}
                            </ul> :
                            <Button onClick={() => getPokemonInfo(pokemon.url)}>Learn More</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PokeCard;