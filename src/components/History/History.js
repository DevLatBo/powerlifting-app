import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledBlock } from '../UI/Styling/General-styling';
import Title from '../UI/Title/Title';
import HistoryItems from './HistoryItems/HistoryItems';
import { fetchHistoryData } from '../../store/mov-actions';
import { historyActions } from '../../store/history-slice';

const History = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const history = useSelector((state) => state.history.data);
    const liftTable = useSelector((state) => state.history.table);

    const historyLength = history.length;
    const error = alertMessage ? alertMessage.message : null;

    useEffect(() => {
        dispatch(fetchHistoryData());
    }, [dispatch]);

    // ComponentWillUnmount
    useEffect(() => {
        return() => {
            dispatch(historyActions.reset());
        }
    },[dispatch])

    const handleChangePage = (event, newPage) => {
        dispatch(historyActions.setPage({page: newPage}));
    }

    const pagination = historyLength ? (
        <TablePagination
            rowsPerPageOptions={liftTable.rowsPerPageOptions}
            component="div"
            count={historyLength}
            rowsPerPage={liftTable.rowsPerPage}
            page={liftTable.page}
            onPageChange={handleChangePage}
        />) : null;
        
    return (
        <Fragment>
            <Title 
                mainTitle="Historial"
                description="Ultimos levantamientos."
            />
            <StyledBlock>
                <TableContainer component={Paper} 
                    sx={{width: {xs: "100%", md:"90%"},margin:'40px auto'}}>
                    <Table sx={{ minWidth: {lg: 700, xs: 100} }} 
                        aria-label="PRs Table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" 
                                    sx={{
                                        color: '#FFFFFF',
                                        fontWeight:'bold',
                                        backgroundColor:'#FF0000',
                                        fontSize: {xs: '0.5rem', md: '1rem'}
                                    }}
                                    width="5%"
                                >
                                        Movimiento
                                </TableCell>
                                <TableCell align="center" 
                                    sx={{
                                        color: '#FFFFFF',
                                        fontWeight:'bold',
                                        backgroundColor:'#FF0000',
                                        fontSize: {xs: '0.5rem', md: '1rem'}
                                    }}
                                    width="20%"
                                >
                                        Peso (kg) [Reps]
                                </TableCell>
                                <TableCell align="center" 
                                    sx={{
                                        color: '#FFFFFF',
                                        fontWeight:'bold',
                                        backgroundColor:'#FF0000',
                                        fontSize: {xs: '0.5rem', md: '1rem'}
                                    }}
                                    width="50%"
                                >
                                        Fecha | Hora
                                </TableCell>
                                <TableCell align="center" 
                                    sx={{
                                        color: '#FFFFFF',
                                        fontWeight:'bold',
                                        backgroundColor:'#FF0000',
                                        fontSize: {xs: '0.5rem', md: '1rem'}
                                    }}
                                    width="25%"
                                >
                                    Acción
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <HistoryItems 
                                page={liftTable.page}
                                rowsPerPage={liftTable.rowsPerPage}
                                error={error} 
                                flagLoader={isLoading}
                                recordItems={history}
                            />
                        </TableBody>
                    </Table>
                    { pagination }
                </TableContainer>
            </StyledBlock>
        </Fragment>
    );
}

export default History;