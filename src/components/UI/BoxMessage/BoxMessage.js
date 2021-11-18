import Alert from '@mui/material/Alert';
import styled from 'styled-components';

const Box = styled.div`
    margin: 0 auto;
    & .error {
        font-size:25px;
    }
    & .error .MuiAlert-icon {
        font-size: 35px;
    }
`;

const BoxMessage = (props) => {
    return (
        <Box>
            <Alert severity={props.type}
                className={props.className}>
                    {props.message}
            </Alert>
        </Box>
    );
}

export default BoxMessage;