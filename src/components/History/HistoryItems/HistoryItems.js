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
    const {page, rowsPerPage, recordItems} = props;
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

    if(recordItems.length) {
        const lifts = recordItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        items = lifts.map((lift) => {
            return (
                <TableRow key={lift.id}>
                    <TableCell align="center">
                        <strong>{obtainMovementName(lift.movement)}</strong>
                    </TableCell>
                    <TableCell align="center">
                        {lift.weight} [{lift.repetition}]
                    </TableCell>
                    <TableCell align="center">
                        {lift.date} - {lift.time}
                    </TableCell>
                    <TableCell align="center">
                        <Button 
                            title="Eliminar"
                            btnType="btnLiftRemove"
                            clicked={onRemoveLiftHandler.bind(null, lift.id, lift.movement)}
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