import React from 'react';
import { Card } from 'react-bootstrap';

const Moves = ({ moves }) => {
    // Limit the list of moves shown to just the first 5 since we don't want to display all moves.
    const firstFive = moves?.slice(0, 5);

    return (
        <>
            {/* HOF */}
            <h4>Moves</h4>
            <ul className='ul-right'>
                {
                    moves ? firstFive.map((currentMove, i) => {
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