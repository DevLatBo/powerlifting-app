import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const InputStyled = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    & .InputCounterLift {
        width: 30vw;
    }
    & .InputCounterLift input{
        text-align: center;
        -moz-appearance: textfield;
    }
    & .InputCounterLift input::-webkit-outer-spin-button,
    & .InputCounterLift input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    @media (min-width: 768px) {
        & .InputCounterLift input {
            font-size: 2.5rem;
        }
        & .InputCounterLift input::placeholder{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 768px) {
        & .InputCounterLift {
            width: 45vw;
        }
        & .InputCounterLift input {
            font-size: 2.25rem;
        }
        & .InputCounterLift input::placeholder{
            font-size: 1rem;
        }
    }
`;
const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case 'input':
            inputElement = <TextField
                            {...props.elementConfig}
                            className={props.elementClass}
                            value={props.value} 
                            onChange={props.changed} 
                            InputProps={{inputProps: props.elementProperties}}
                            />;
            break;
        default:
            inputElement = <input { ...props.elementConfig} 
                            value={props.value} 
                            onChange={props.changed} />
            break;
    }
    return (
        <InputStyled>
            {inputElement}
        </InputStyled>
    );
}

export default input;