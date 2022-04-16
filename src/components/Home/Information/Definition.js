import React from 'react';
import { StyledHome } from '../../UI/Block/block-styling';

const Definition = (props) => {
    return(
        <StyledHome 
            backgroundColor="#FF0000"
            fontColor="#FFFFFF">
            <h2>¿Qué es el Powerlifting?</h2>
            <p>Es una disciplina de fuerza, que consiste en levantar el mayor peso posible en tres ejercicios diferentes. 
                Para realizar esta disciplina, el atleta debe tener un entrenamiento físico y mental compuesto 
                por los siguientes ejercicios: <strong>Sentadillas, press de banca y peso muerto.</strong></p>
        </StyledHome>
    );
}

export default Definition;
