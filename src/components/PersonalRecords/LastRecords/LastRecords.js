import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useHttp from '../../../hooks/use-http';
import LastRecordItems from './LastRecordItems/LastRecordItems';

const StyledTableCell = styled(TableCell)`
    background: #FF0000;
`;
const LastRecords = (props) => {
    const [records, setRecords] = useState([]);
    const { isLoading, error, sendRequest: fetchLiftsData} = useHttp();
    useEffect(() => {
        const obtainLiftsData = (lifts) => {
            const loadedLifts = [];
            for(let movement in lifts) {
                Object.entries(lifts[movement]).forEach( ([key, data]) => {
                    loadedLifts.push({
                        movement: movement,
                        date: data.date,
                        time: data.time,
                        repetition: data.repetition,
                        weight: data.weight,
                    });
                });
            }
            setRecords(loadedLifts);
        };
        fetchLiftsData(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/lifts.json"},
            obtainLiftsData
        );

    }, [fetchLiftsData]);
    records.sort((a,b) => (a.time < b.time) ? 1:-1);
    const lastRecords = (records.length >=5) ? records.slice(0,5) : records;

    return (
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
                <LastRecordItems 
                    error={error} 
                    flagLoader={isLoading}
                    recordItems={lastRecords}
                />
            </Table>
        </TableContainer>
    );
}

export default LastRecords;
