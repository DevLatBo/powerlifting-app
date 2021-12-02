import Alert from '@mui/material/Alert';
import styled from 'styled-components';

const Box = styled.div`
    margin: 0 auto;
    & .error {
        font-size:1.75rem;
    }
    & .error .MuiAlert-icon {
        font-size: 2.125rem;
    }
`;

const BoxMessage = (props) => {
    return (
        <Box>
            <Alert severity={props.type}
                className={props.className}>
                    {props.children}
            </Alert>
        </Box>
    );
}

export default BoxMessage;