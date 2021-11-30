import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import Spinner from '../../../UI/Loader/Loader';
import BoxMessage from '../../../UI/BoxMessage/BoxMessage';

const LastRecordItems = (props) => {
    let items = 
        <TableRow>
            <TableCell align="center" colSpan={3}>
                <strong>No existen marcas registradas que mostrar.</strong>
            </TableCell>
        </TableRow>
    ;
    const loader = 
        <TableRow>
            <TableCell align="center" colSpan={3}>
                <Spinner size="lg" />
            </TableCell>
        </TableRow>;

    const errorMessage = 
        <TableRow>
            <TableCell align="center" colSpan={3}>
                <BoxMessage type="error"
                    className="error" 
                    message={props.error}/>
            </TableCell>
        </TableRow>;

    const recordItems = props.recordItems;
    if(recordItems.length) {
        items = recordItems.map((recordItem) => {
            return (
                <TableRow key={recordItem.id}>
                    <TableCell align="center">
                        <strong>{recordItem.movement}</strong>
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.weight} [{recordItem.repetition}]
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.date}
                    </TableCell>
                </TableRow>
            );
        })
    }
    return(
        <TableBody>
            { !props.flagLoader && !props.error && items }
            { props.flagLoader && loader }
            { !props.flagLoader && props.error && errorMessage }
        </TableBody>
    )
}

export default LastRecordItems;