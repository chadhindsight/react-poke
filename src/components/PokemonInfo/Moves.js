import React from 'react';
import List from '@mui/material/List';
import { ListItemText, Typography } from '@mui/material';

const Moves = ({ moves }) => {
    // Limit the list of moves shown to just the first 5 since we don't want to display all moves.
    const firstFive = moves?.slice(0, 5);

    return (
        <>
            <Typography variant="h5">Moves</Typography>
            <List>
                {
                    moves ? firstFive.map((currentMove, i) => {
                        const { name } = currentMove.move
                        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

                        return (
                            <ListItemText>{capitalizedName}</ListItemText>
                        )
                    }) : null
                }
            </List>
        </>
    );
};

export default Moves;