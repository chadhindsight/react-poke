import React from 'react';
import { Card } from 'react-bootstrap';

const Moves = ({ moves }) => {
    return (
        <>
            <h4>Moves</h4>
            <ul style={{ margiRight: "27px" }}>
                {
                    moves ? moves.slice(0, 5).map((currentMove, i) => {
                        const { name } = currentMove.move

                        return (<li key={i} style={{ listStyle: 'none' }}>
                            <Card.Text>{name}</Card.Text>
                        </li>)
                    }) : null
                }
            </ul>
        </>
    );
};

export default Moves;