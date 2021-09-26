import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LastRecords = (props) => {
    const rows = [
        {movement: 'Deadlift', lift: 95},
        {movement: 'Bench Press', lift: 42.5},
        {movement: 'Squat', lift: 100},
        {movement: 'Deadlift', lift: 140.5},
        {movement: 'Squat', lift: 70},
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Movimiento</TableCell>
                        <TableCell align="right">Peso (kg)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.movement}
                        </TableCell>
                        <TableCell align="right">{row.lift}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;