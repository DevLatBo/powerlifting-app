import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import Header from './Header/Header';

const TableData = (props) => {
    const { rowsPerPageOptions, page, rowsPerPage } = props.pageConfig;
    return (
        <TableContainer component={Paper}
            sx={{width: {xs: "100%", md:"90%"},margin:'40px auto'}}>
            <Table sx={{ minWidth: {lg: 700, xs: 100} }} 
                aria-label="History Data Table">
                <Header/>
                {props.children}
            </Table>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={props.size}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={props.onPageChange}
            />
        </TableContainer>
    );
}

export default TableData;