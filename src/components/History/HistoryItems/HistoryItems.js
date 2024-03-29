import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

import Button from '../../UI/Button/Button'
import { removeLifting } from '../../../store/mov-actions';
import { obtainMovementName } from '../../../shared/utility'; 

const HistoryItems = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { pageConfig, recordItems } = props;
    const { page, rowsPerPage } = pageConfig
    
    const sxRowInvalid = {
        backgroundColor: "#F59F9F"
    };
    const sxRowValid = {
        backgroundColor: "#9FF59F"
    };

    let items = 
        <TableRow>
            <TableCell align="center" colSpan={4}>
                <strong>No existen marcas registradas que mostrar.</strong>
            </TableCell>
        </TableRow>
    ;

    const onRemoveLiftHandler = (id, movement) => {
        dispatch(removeLifting(id, movement));
    };

    const onEditLiftHandler = (id, movement) => {
        history.push(`/movements/${movement}/edit/${id}`);
    }

    if(recordItems.length) {
        const lifts = recordItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        items = lifts.map((lift) => {
            return (
                <TableRow key={lift.id} 
                    sx={
                        { 
                            ...(!lift.flag && sxRowInvalid), 
                            ...(lift.flag && sxRowValid)
                        }
                    }>
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.5rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        <strong>{obtainMovementName(lift.movement)}</strong>
                    </TableCell>
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.5rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        {lift.weight} [{lift.repetition}]
                    </TableCell>
                    <TableCell 
                        sx={{
                            fontSize: {xs: '0.5rem', md: '1rem'}
                        }}
                        align="center"
                    >
                        {lift.date} | {lift.time}
                    </TableCell>
                    <TableCell 
                        align="center"
                    >
                        <Button 
                            title="Eliminar"
                            btnType="btnLiftRemove"
                            clicked={onRemoveLiftHandler.bind(null, lift.id, lift.movement)}
                        >
                            <HighlightOffIcon />
                        </Button>
                        <Button 
                            title="Editar"
                            btnType="btnLiftEdit"
                            clicked={onEditLiftHandler.bind(null, lift.id, lift.movement)}
                        >
                            <EditIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            );
        })
    }

    return (
        <Fragment>
            {items}
        </Fragment>
    )
    
}

export default React.memo(HistoryItems);