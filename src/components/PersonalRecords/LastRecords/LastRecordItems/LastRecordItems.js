import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const LastRecordItems = (props) => {
    let items = 
        <TableRow>
            <TableCell align="center" colSpan={4}><strong>No existen registros que mostrar.</strong></TableCell>
        </TableRow>
    ;
    const recordItems = props.recordItems;
    if(recordItems.length) {
        items = recordItems.map((recordItem) => {
            return (
                <TableRow key={recordItem.lift.weight}>
                    <TableCell align="center"><strong>{recordItem.lift.movement}</strong></TableCell>
                    <TableCell align="center">{recordItem.lift.weight}</TableCell>
                    <TableCell align="center">{recordItem.lift.repetition}</TableCell>
                    <TableCell align="center">{recordItem.lift.date}</TableCell>
                </TableRow>
            );
        })
    }

    return(
        <TableBody>
            {items}
        </TableBody>
    )
}

export default LastRecordItems;