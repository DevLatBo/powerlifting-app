import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import Spinner from '../../UI/Loader/Loader';
import Alert from '../../UI/Alert/Alert';
import { obtainMovementName } from '../../../shared/utility'; 

const HistoryItems = (props) => {
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
                <Alert type="error"
                    className="error">
                    {props.error}
                </Alert>
            </TableCell>
        </TableRow>;

    const recordItems = props.recordItems;
    if(recordItems.length) {
        items = recordItems.map((recordItem) => {
            return (
                <TableRow key={uuidv4()}>
                    <TableCell align="center">
                        <strong>{obtainMovementName(recordItem.movement)}</strong>
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.weight} [{recordItem.repetition}]
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.date} - {recordItem.time}
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

export default HistoryItems;