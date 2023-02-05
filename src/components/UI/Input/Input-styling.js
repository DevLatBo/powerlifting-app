import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 'styled-components';

export const StyledInputLift = styled(TextField)`
    &.InputLift {
        margin: 20px 0px 20px 0px;
    }
    &.InputLift input {
        text-align: center;
        -moz-appearance: textfield;
    }
    &.InputLift input::-webkit-outer-spin-button,
    &.InputLift input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media (min-width: 768px) {
        &.InputLift {
            width: 20vw;
        }
        &.InputLift input {
            font-size: 2.5rem;
        }
        &.InputLift input::placeholder {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 768px) {
        &.InputLift {
            width: 30vw;
        }
        &.InputLift input {
            font-size: 2.25rem;
        }
        &.InputLift input::placeholder {
            font-size: 1rem;
        }
    }
`;

export const StyledCheckbox = styled(FormControlLabel)`
    &.InputFlag {
        margin: 0 auto;
    }
`; 