import Alert from '@mui/material/Alert';
import styled from 'styled-components';

export const StyledAlert = styled(Alert)`
    width: 35vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 60vw;
    }
`;

export const StyledForm = styled.div`
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 2px 3px #CCC;
    border: 1px solid #EEE;
    padding: 10px;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 45vw;
    }
    @media (max-width: 768px) {
        width: 60vw;
    }
`;
