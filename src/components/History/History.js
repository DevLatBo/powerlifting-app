import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledBlock, StyledTitlePage } from '../UI/Styling/General-styling'; 
import { StyledHeaderCell } from '../UI/Styling/Section/History-styling';
import HistoryItems from './HistoryItems/HistoryItems';
import { fetchLiftsData } from '../../store/mov-actions';
import { liftActions } from '../../store/lift-slice';

const History = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const history = useSelector((state) => state.lift.history);
    const liftTable = useSelector((state) => state.lift.table);

    const historyLength = history.length;

    useEffect(() => {
        dispatch(fetchLiftsData("allLifts"));
    }, [dispatch]);

    const handleChangePage = (event, newPage) => {
        dispatch(liftActions.setPage({page: newPage}));
    }

    return (
        <Fragment>
            <StyledTitlePage type="title-page"
                imageBackground={`/assets/images/title-background.jpg`}
            >
                <h2>Historial</h2>
                <h3>Ultimos levantamientos.</h3>
            </StyledTitlePage>
            <StyledBlock>
                <TableContainer component={Paper} 
                sx={{width: {xs: "100%", md:"90%"},margin:'40px auto'}}>
                    <Table sx={{ minWidth: {lg: 700, xs: 100} }} 
                        aria-label="PRs Table">
                        <TableHead>
                            <TableRow>
                                <StyledHeaderCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}
                                    width="15%"
                                >
                                        Movimiento
                                </StyledHeaderCell>
                                <StyledHeaderCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}
                                    width="35%"
                                >
                                        Peso (kg) [Reps]
                                </StyledHeaderCell>
                                <StyledHeaderCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}
                                    width="40%"
                                >
                                        Fecha - Hora
                                </StyledHeaderCell>
                                <StyledHeaderCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}
                                    width="10%">
                                    Accion
                                </StyledHeaderCell>
                            </TableRow>
                        </TableHead>
                        <HistoryItems 
                            page={liftTable.page}
                            rowsPerPage={liftTable.rowsPerPage}
                            error={alertMessage} 
                            flagLoader={isLoading}
                            recordItems={history}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={liftTable.rowsPerPageOptions}
                    component="div"
                    count={historyLength}
                    rowsPerPage={liftTable.rowsPerPage}
                    page={liftTable.page}
                    onPageChange={handleChangePage}
                />
            </StyledBlock>
        </Fragment>
    );
}

export default History;