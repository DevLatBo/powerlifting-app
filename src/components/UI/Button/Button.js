import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
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
    @media (min-width: 768px) {
        &.btnLift, &.btnLiftDisabled{
            font-size: 50px;
            width: 50%;
        }
    }
    @media (max-width: 768px){
        &.btnLift, &.btnLiftDisabled {
            font-size: 30px;
            width: 80%;
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
const button = (props) => {
    return(
        <ButtonStyled className={["Btn", props.btnType].join(' ')}
                disabled={props.disabled}
                onClick={props.clicked}>
            {props.children}
        </ButtonStyled>
    );
}

export default button;