import React from 'react';
import List from '@mui/material/List';
import { ListItemText, Typography } from '@mui/material';

const Types = ({ types }) => {
    return (
        <>
            <Typography variant="h5">Pokemon Types</Typography>
            <List> {
                types?.map((type, i) => {
                    const { name } = type.type
                    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)


                    return (<ListItemText key={i}>{capitalizedName}</ListItemText>)
                })
            }
            </List>

        </>

    );
};

export default Types;