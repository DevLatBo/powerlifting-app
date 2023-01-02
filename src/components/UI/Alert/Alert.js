import React from 'react';
import { StyledAlert } from './Alert-styling';

const Alert = (props) => {
    return (
        <StyledAlert severity={props.type}
            className={props.className}
            onClose={props.onClose}>
                {props.children}
        </StyledAlert>
    );
}

export default React.memo(Alert);