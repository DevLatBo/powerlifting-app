import React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)`
    background: #FF0000;
`;
const LastRecords = (props) => {
    const rows = [
        {movement: 'Deadlift', lift: 95},
        {movement: 'Bench Press', lift: 42.5},
        {movement: 'Squat', lift: 100},
        {movement: 'Deadlift', lift: 140.5},
        {movement: 'Squat', lift: 70},
    ];
    return (
        <TableContainer component={Paper} sx={{width: '70%',margin:'40px auto'}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" sx={{color: '#FFFFFF',fontWeight:'bold'}}>Movimiento</StyledTableCell>
                        <StyledTableCell align="center" sx={{color: '#FFFFFF',fontWeight:'bold'}}>Peso (kg)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell align="center"><strong>{row.movement}</strong></TableCell>
                        <TableCell align="center">{row.lift}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;