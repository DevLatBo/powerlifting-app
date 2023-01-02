import React, { Fragment } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import { StyledInputLift, StyledCheckbox } from './Input-styling';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case 'number':
            inputElement = <StyledInputLift
                            {...props.elementConfig}
                            className={props.elementClass}
                            value={props.value} 
                            onChange={props.changed}
                            InputProps={{inputProps: props.elementProperties}}
                            />;
            break;
        case 'checkbox':
            inputElement = <FormGroup><StyledCheckbox
                className={props.elementClass}
                value={props.value}
                control={
                    <Checkbox
                        color='default' 
                        onChange={props.changed}
                        checked={props.value}
                    />
                }
                {...props.elementConfig}
            /></FormGroup>;
            break;
        default:
            inputElement = <input { ...props.elementConfig} 
                            value={props.value} 
                            onChange={props.changed} />
            break;
    }
    return (
        <Fragment>
            {inputElement}
        </Fragment>
    );
}

export default input;