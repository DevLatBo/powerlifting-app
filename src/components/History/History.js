import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledBlock, StyledTitlePage } from '../UI/Styling/General-styling'; 
import { StyledTableCell } from '../UI/Styling/Section/History-styling';
import HistoryItems from './HistoryItems/HistoryItems';
import { fetchLiftsData } from '../../store/mov-actions';

const History = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const history = useSelector((state) => state.lift.history);
    
    useEffect(() => {
        dispatch(fetchLiftsData("lastLifts"));
    }, [dispatch]);

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
                sx={{width: {xs: "100%", md:"70%"},margin:'40px auto'}}>
                    <Table sx={{ minWidth: {lg: 700, xs: 100} }} 
                        aria-label="PRs Table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                        Movimiento
                                </StyledTableCell>
                                <StyledTableCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                        Peso (kg) [Reps]
                                </StyledTableCell>
                                <StyledTableCell align="center" 
                                    sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                        Fecha
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <HistoryItems 
                            error={alertMessage} 
                            flagLoader={isLoading}
                            recordItems={history}
                        />
                    </Table>
                </TableContainer>
            </StyledBlock>
        </Fragment>
    );
}

export default History;