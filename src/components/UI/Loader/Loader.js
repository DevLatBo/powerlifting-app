import React from 'react';
import { Spinner } from './Loader-styling';

const Loader = (props) => {
    return (
        <Spinner src={`assets/gifs/spinner_${props.size}.gif`} 
            alt="Cargando..." />
    );

}

export default React.memo(Loader);