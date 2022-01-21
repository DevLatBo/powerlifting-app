import Alert from '@mui/material/Alert';
import { Box } from './BoxMessage-styling';

const BoxMessage = (props) => {
    return (
        <Box>
            <Alert severity={props.type}
                className={props.className}
                onClose={props.onClose}>
                    {props.children}
            </Alert>
        </Box>
    );
}

export default BoxMessage;