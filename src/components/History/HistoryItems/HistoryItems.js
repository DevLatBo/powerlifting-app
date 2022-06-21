import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import Spinner from '../../UI/Loader/Loader';
import Alert from '../../UI/Alert/Alert';
import Button from '../../UI/Button/Button'
import { removeLifting } from '../../../store/mov-actions';
import { obtainMovementName } from '../../../shared/utility'; 

const HistoryItems = (props) => {
    const dispatch = useDispatch();
    const {page, rowsPerPage, recordItems, error, flagLoader} = props;
    
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
                    {error}
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
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.6rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        <strong>{obtainMovementName(lift.movement)}</strong>
                    </TableCell>
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.6rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        {lift.weight} [{lift.repetition}]
                    </TableCell>
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.6rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        {lift.date} - {lift.time}
                    </TableCell>
                    <TableCell 
                        align="center"
                    >
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

    return (
        <Fragment>
            { !flagLoader && !error && items }
            { flagLoader && loader }
            { !flagLoader && error && errorMessage }
        </Fragment>
    )
    
}

export default HistoryItems;