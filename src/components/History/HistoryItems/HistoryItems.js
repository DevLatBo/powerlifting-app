import React from 'react';
import { useDispatch } from 'react-redux';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import Spinner from '../../UI/Loader/Loader';
import Alert from '../../UI/Alert/Alert';
import Button from '../../UI/Button/Button'
import { removeLifting } from '../../../store/mov-actions';
import { obtainMovementName } from '../../../shared/utility'; 

const HistoryItems = (props) => {
    const dispatch = useDispatch();
    let items = 
        <TableRow>
            <TableCell align="center" colSpan={4}>
                <strong>No existen marcas registradas que mostrar.</strong>
            </TableCell>
        </TableRow>
    ;
    const loader = 
        <TableRow>
            <TableCell align="center" colSpan={4}>
                <Spinner size="lg" />
            </TableCell>
        </TableRow>;

    const errorMessage = 
        <TableRow>
            <TableCell align="center" colSpan={4}>
                <Alert type="error"
                    className="error">
                    {props.error}
                </Alert>
            </TableCell>
        </TableRow>;

    const onRemoveLiftHandler = (id, movement) => {
        dispatch(removeLifting(id, movement));
    };

    const recordItems = props.recordItems;
    if(recordItems.length) {
        items = recordItems.map((recordItem) => {
            return (
                <TableRow key={recordItem.id}>
                    <TableCell align="center">
                        <strong>{obtainMovementName(recordItem.movement)}</strong>
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.weight} [{recordItem.repetition}]
                    </TableCell>
                    <TableCell align="center">
                        {recordItem.date} - {recordItem.time}
                    </TableCell>
                    <TableCell align="center">
                        <Button 
                            title="Eliminar"
                            clicked={onRemoveLiftHandler.bind(null, recordItem.id, recordItem.movement)}
                        >
                            X
                        </Button>
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