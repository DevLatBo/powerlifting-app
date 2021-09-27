import React, {useContext} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LiftContext from '../../../store/lift-context';
import LastRecordItems from './LastRecordItems/LastRecordItems';

const StyledTableCell = styled(TableCell)`
    background: #FF0000;
`;
const LastRecords = (props) => {
    const ctxLift = useContext(LiftContext);

    return (
        <TableContainer component={Paper} sx={{width: '70%',margin:'40px auto'}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" sx={{color: '#FFFFFF',fontWeight:'bold'}}>Movimiento</StyledTableCell>
                        <StyledTableCell align="center" sx={{color: '#FFFFFF',fontWeight:'bold'}}>Peso (kg)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <LastRecordItems recordItems={ctxLift.lifts}/>
            </Table>
        </TableContainer>
    );
}

export default LastRecords;