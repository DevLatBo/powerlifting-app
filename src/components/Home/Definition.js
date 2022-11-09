import React from 'react';
import { StyledHome } from '../UI/Styling/Section/Home-styling';

const Definition = (props) => {
    return(
        <StyledHome 
            backgroundColor="#FF0000"
            fontColor="#FFFFFF">
            <h2>¿Qué es el Powerlifting?</h2>
            <p>El powerlifting, también conocido como levantamiento de potencia es una de las modalidades del deporte de fuerza que consiste 
                <strong>en levantar el mayor peso posible mediante tres movimientos básicos</strong>: peso muerto, sentadilla y press de banca. 
                En cada uno de ellos, el powerlifter trabajará con un grupo muscular diferente.</p>
        </StyledHome>
    );
}

export default Definition;
