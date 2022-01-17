import React from 'react';
import styled from 'styled-components';
import Section from '../../UI/Section/Section';

const StyledDefinition = styled.div`
    padding: 45px 45px;
    @media (max-width: 767px) {
        padding: 30px;
        margin-right: 0px;
        margin-bottom: 10px;
    }
    & h2 {
        font-size: 2.25rem;
        font-weight: 600;
        margin-bottom: 35px;
    }
    & p {
        font-size: 1.25rem;
        margin-bottom: 30px;
    }
`;
const Definition = (props) => {
    return(
        <Section type="definition">
            <StyledDefinition>
                <h2>¿Qué es el Powerlifting?</h2>
                <p>Es una disciplina de fuerza, que consiste en levantar el mayor peso posible en tres ejercicios diferentes. 
                    Para realizar esta disciplina, el atleta debe tener un entrenamiento físico y mental compuesto 
                    por los siguientes ejercicios: <strong>Sentadillas, press de banca y peso muerto.</strong></p>
            </StyledDefinition>
        </Section>
    );
}

export default Definition;