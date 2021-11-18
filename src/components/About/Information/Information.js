import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Info = styled.div`
    margin-top: 140px;
    background-color: #F7F7F7;
    & .definition {
        padding: 45px 45px 45px 30px;
        margin-right: 30px;
        margin-bottom: 0px;
    }
    @media (max-width: 767px) {
        & .definition {
            padding: 30px;
            margin-right: 0px;
            margin-bottom: 30px;
        }
    }
    & .definition span {
        text-transform: uppercase;
        font-size: 15px;
        color: #666;
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
    }
    & .definition h2 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 35px;
    }
    & .definition em {
        font-style: normal;
        color: #FF0000;
    }
    & .definition p {
        margin-bottom: 30px;
        font-size:14px;
    }
    & .reference img {
        width: 100%;
        overflow: hidden;
    }
    @media (min-width: 1280px) {
        & .reference {
            margin-top: 2rem;
        }
    }
    @media (min-width: 960px) and (max-width: 1280px) {
        & .reference {
            margin-top: 10rem;
        }
    }  
`;
const Information = (props) => {
    return(
        <Info>
            <Grid container>
                <Grid item md={6}>
                    <div className="definition">
                        <span>Disciplina de fuerza</span>
                        <h2>Conoce mas sobre <em>Powerlifting</em></h2>
                        <p>Es una disciplina de fuerza, pues consiste en levantar el mayor peso posible en tres ejercicios diferentes. 
                            Para realizar esta disciplina, el atleta debe tener un entrenamiento físico y mental compuesto 
                            por los siguientes ejercicios: <strong>Sentadillas, press de banca y peso muerto.</strong>
                        <br/><br/>El objetivo de cada uno de estos ejercicios es levantar el máximo peso posible mientras se ejecutan, 
                            con un recorrido completo y según una normativa establecida. En competiciones profesionales, 
                            el levantamiento válido más pesado es el que cuenta para cada prueba y el ganador es el que consiga mejor puntuación 
                            por cada uno de los movimientos y por la suma de los tres.</p>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="reference">
                        <img src={`assets/images/Powerlifter.jpg`} alt=""/>
                    </div>
                </Grid>
            </Grid>
        </Info>
    );
}

export default Information;