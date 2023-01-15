import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Header = (props) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center" 
                    sx={{
                        color: '#FFFFFF',
                        fontWeight:'bold',
                        backgroundColor:'#FF0000',
                        fontSize: {xs: '0.5rem', md: '1rem'}
                    }}
                    width="5%"
                >
                    Movimiento
                </TableCell>
                <TableCell align="center" 
                    sx={{
                        color: '#FFFFFF',
                        fontWeight:'bold',
                        backgroundColor:'#FF0000',
                        fontSize: {xs: '0.5rem', md: '1rem'}
                    }}
                        width="20%"
                >
                    Peso [Reps]
                </TableCell>
                <TableCell align="center" 
                    sx={{
                        color: '#FFFFFF',
                        fontWeight:'bold',
                        backgroundColor:'#FF0000',
                        fontSize: {xs: '0.5rem', md: '1rem'}
                    }}
                    width="50%"
                >
                        Fecha | Hora
                </TableCell>
                <TableCell align="center" 
                    sx={{
                        color: '#FFFFFF',
                        fontWeight:'bold',
                        backgroundColor:'#FF0000',
                        fontSize: {xs: '0.5rem', md: '1rem'}
                    }}
                    width="25%"
                >
                    Acción
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default Header;