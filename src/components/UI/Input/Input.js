import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const InputStyled = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    & .InputCounterLift {
        width: 50%;
    }
    & .InputCounterLift input{
        text-align: center;
    }
    @media (min-width: 768px) {
        & .InputCounterLift input {
            font-size: 2.5rem;
        }
    }
    @media (max-width: 768px) {
        & .InputCounterLift input {
            font-size: 2.25rem;
        }
    }
`;
const input = (props) => {
    let inputElement = null;
    let errorVal = false;
    if(props.shouldValidate && props.invalid && props.touched){
        errorVal = true;
    }
    
    switch(props.elementType){
        case 'input':
            inputElement = <TextField
                            error={errorVal}
                            {...props.elementConfig}
                            className={props.elementClass}
                            value={props.value} 
                            onChange={props.changed} 
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