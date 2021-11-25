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
    const recordItems = {
        "bench-press": {
            "lift": {
                "date": "2021-06-11",
                "weight": "75.5",
                "repetition":"4",
            },
            "lift": {
                "date": "2021-06-14",
                "weight": "79",
                "repetition":"2",
            },
        },
        "deadlift": {
            "lift": {
                "date": "2021-06-11",
                "weight": "140",
                "repetition":"7",
            },
            "lift": {
                "date": "2021-06-16",
                "weight": "160",
                "repetition":"2",
            },
            "lift": {
                "date": "2021-06-20",
                "weight": "165",
                "repetition":"1",
            },
        },
        "squat": {
            "lift": {
                "date": "2021-06-14",
                "weight": "100",
                "repetition":"2",
            },
        },
    }
    const loadedRecords = [];
    for(let key in recordItems) {
        loadedRecords.push({
            "id": key,
            "date": recordItems[key].lift.date,
            "weight": recordItems[key].lift.weight,
            "repetition":recordItems[key].lift.repetition,
        });
    }
    
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
                <LastRecordItems recordItems={loadedRecords}/>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;