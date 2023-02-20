import React from 'react';
import { Card } from 'react-bootstrap';

const Types = ({ types }) => {
    return (
        <>
            <h4>Pokemon Types</h4>
            {
                types?.map((type, i) => {
                    const { name } = type.type

                    return (<Card.Text key={i}>{name}</Card.Text>)
                })
            }
        </>

    );
};

export default Types;