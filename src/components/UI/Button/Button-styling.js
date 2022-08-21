import styled from 'styled-components';

export const StyledButton = styled.button`
    &.Btn {
        border: none;
        outline: none;
        cursor: pointer;
        font: inherit;
        padding: 10px;
        margin: 10px;
        font-weight: bold;
    }
    &.Button:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
    &.btnLiftRemove {
        background-color: #FF0000;
        padding: 0px;
        margin: 5px;
        color: #FFFFFF;
        border-radius: 10px;
    }
    &.btnLiftRemove svg {
        padding-top: 5px;
    }
    &.btnLiftEdit {
        background-color: #0000FF;
        padding: 0px;
        margin: 5px;
        color: #FFFFFF;
        border-radius: 10px;
    }
    &.btnLiftEdit svg {
        padding-top: 5px;
    }
    @media (min-width: 768px) {
        &.btnLift, &.btnLiftDisabled{
            font-size: 50px;
            width: 30vw;
        }
        &.btnLiftRemove svg {
            font-size: 2rem;
        }
        &.btnLiftEdit svg {
            font-size: 2rem;
        }
    }
    @media (max-width: 768px){
        &.btnLift, &.btnLiftDisabled {
            font-size: 30px;
            width: 45vw;
        }
        &.btnLiftRemove svg {
            font-size: 1.5rem;
        }
        &.btnLiftEdit svg {
            font-size: 1.5rem;
        }
    }
    &.btnLift {
        background-color: #FF0000;
        color: #FFF;
        border-radius: 10px;
    }
    &.btnLiftDisabled {
        color: #CCC;
        cursor: not-allowed;
        border-radius: 15px;
    }

    &.Danger {
        color: #944317;
    }
`;
