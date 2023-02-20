import React from 'react';
import { Card } from 'react-bootstrap';

const Types = ({ types }) => {
    console.log(types)

    return (
        <>
            <h4>Types</h4>
            {
                types.map((type) => {
                    const { name } = type.type

                    return (<Card.Text>{name}</Card.Text>)
                })
            }
        </>

    );
};

export default Types;