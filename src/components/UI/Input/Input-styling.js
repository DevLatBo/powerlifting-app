import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
    &.InputNumberLift {
        width: 30vw;
        margin: 20px 0px 20px 0px;
    }
    &.InputNumberLift input {
        text-align: center;
        -moz-appearance: textfield;
    }
    &.InputNumberLift input::-webkit-outer-spin-button,
    &.InputNumberLift input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media (min-width: 768px) {
        &.InputNumberLift input {
            font-size: 2.5rem;
        }
        &.InputNumberLift input::placeholder {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 768px) {
        &.InputNumberLift input {
            font-size: 2.25rem;
        }
        &.InputNumberLift input::placeholder {
            font-size: 1rem;
        }
    }
`;