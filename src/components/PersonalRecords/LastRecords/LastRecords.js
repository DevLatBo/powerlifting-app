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
                loadedLifts.push({
                    mov: movement,
                    data: lifts[movement]
                });
            }
            setRecords(loadedLifts);
        };
        fetchLiftsData(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/lifts.json"},
            obtainLiftsData
        );

    }, [fetchLiftsData]);
    /*console.log(records);
    const movements = records.map((recordData) => recordData.mov);
    console.log(movements);*/
    const loadedRecords = [];    
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
                                Peso (kg) [Reps]
                        </StyledTableCell>
                        <StyledTableCell align="center" 
                            sx={{color: '#FFFFFF',fontWeight:'bold'}}>
                                Fecha
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <LastRecordItems recordItems={loadedRecords}/>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;