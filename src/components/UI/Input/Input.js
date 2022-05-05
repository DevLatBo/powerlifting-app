import React, { Fragment} from 'react';

import { StyledInput } from './Input-styling';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case 'number':
            inputElement = <StyledInput
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
        <Fragment>
            {inputElement}
        </Fragment>
    );
}

export default input;