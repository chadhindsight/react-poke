import { Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';

const Types = ({ types }) => {
    return (
        <>
            <Typography variant="h5">Pokemon Types</Typography>
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