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
        width: 40px;
        text-align: center;
        border-radius: 50%;
        background-color: #FF0000;
        color: #FFFFFF;
    }
    @media (min-width: 768px) {
        &.btnLift, &.btnLiftDisabled{
            font-size: 50px;
            width: 30vw;
        }
    }
    @media (max-width: 768px){
        &.btnLift, &.btnLiftDisabled {
            font-size: 30px;
            width: 45vw;
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
