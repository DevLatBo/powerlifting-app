import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Section from '../../UI/Section/Section';

const StyledDefinition = styled.div`
    padding: 45px 45px 45px 30px;
    margin-bottom: 0px;
    text-align: center;
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
    & em {
        font-style: normal;
        color: #FF0000;
    }
    & p {
        margin-bottom: 30px;
        font-size: 1rem;
    }
`;
const Definition = (props) => {
    return(
        <Section>
            <Grid container>
                <Grid item md={12}>
                    <StyledDefinition>
                        <h2>¿Qué es el <em>Powerlifting</em>?</h2>
                        <p>Es una disciplina de fuerza, que consiste en levantar el mayor peso posible en tres ejercicios diferentes. 
                            Para realizar esta disciplina, el atleta debe tener un entrenamiento físico y mental compuesto 
                            por los siguientes ejercicios: <strong>Sentadillas, press de banca y peso muerto.</strong>
                        <br/><br/>El objetivo de cada uno de estos ejercicios es levantar el máximo peso posible durante su ejecución 
                            siempre y cuando se tenga una postura correcta y sea completa. En competiciones profesionales, 
                            el levantamiento válido más pesado es el que cuenta para cada prueba y el ganador es el que consiga mejor puntuación 
                            por cada uno de los movimientos y por la suma de los tres, ya sea dentro de su categoría o sea absoluto.</p>
                    </StyledDefinition>
                </Grid>
            </Grid>
        </Section>
    );
}

export default Definition;