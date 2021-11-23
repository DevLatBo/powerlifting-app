import React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LastRecordItems from './LastRecordItems/LastRecordItems';

const StyledTableCell = styled(TableCell)`
    background: #FF0000;
`;
const LastRecords = (props) => {

    return (
        <TableContainer component={Paper} 
            sx={{width: {xs: "100%", md:"70%"},margin:'40px auto'}}>
            <Table sx={{ minWidth: {lg: 700, xs: 100} }} 
                aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" 
                            sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                Movimiento
                        </StyledTableCell>
                        <StyledTableCell align="center" 
                            sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                Peso (kg)
                        </StyledTableCell>
                        <StyledTableCell align="center" 
                            sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                Reps.
                        </StyledTableCell>
                        <StyledTableCell align="center" 
                            sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                Fecha
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <LastRecordItems recordItems={[]}/>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;