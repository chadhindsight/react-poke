import React from 'react';
import { Card } from 'react-bootstrap';

const Moves = ({ moves }) => {
    return (
        <ul>
            {
                moves ? moves.slice(0, 5).map((currentMove, i) => {
                    const { name } = currentMove.move

                    return (<li key={i}>
                        <Card.Text>{name}</Card.Text>
                    </li>)
                }) : null
            }
        </ul>
    );
};

export default Moves;