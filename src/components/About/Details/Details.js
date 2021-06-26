import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import SquatImage from '../../../assets/images/Squat.jpg';
import BenchPressImage from '../../../assets/images/BenchPress.jpeg';
import DeadliftImage from '../../../assets/images/Deadlift.jpg';

const DetailsContainer = styled.div`
    background-color: #F7F7F7;
    margin-top: 140px;
    margin-bottom: -140px;
    padding: 120px 0px;
`;
const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 80px;
    width: 100%;
    & h2 {
        font-size: 36px;
        font-weight: 600;
        color: #1E1E1E;
    }
    & em {
        font-style: normal;
        color: #FF0000;
    }
    & span {
        display: block;
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 15px;
        color: #666;
        letter-spacing: 1px;
    }
`;
const DownContent = styled.div`
    background-color: #FFF;
    padding: 30px;
    & h4 {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
    }
    & span {
        color: #FF0000;
        font-weight: 600;
        font-size: 14px;
        display: block;
        margin-bottom: 15px;
    },
    & p {
        margin-bottom: 20px;
    }
`;
const DetailItem = styled.div`
    margin-bottom: 30px;
    & img {
        width: 90%;
        height: 275px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        margin-bottom: 0px;
    }
`;

const Details = (props) => {
    return (
        <DetailsContainer>
            <Grid container>
                <SectionHeading>
                    <h2>Movimientos del <em>Powerlifting</em></h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </SectionHeading>
                <Grid item md={4}>
                    <DetailItem>
                        <img src={SquatImage} alt=""/>
                        <DownContent>
                            <h4>Sentadilla</h4>
                            <span>Piernas</span>
                            <p>Es un ejercicio, por lo general, dominante de rodilla. 
                                Esto quiere decir que la ejecución de la misma depende más de una flexión de rodilla que de una flexión de cadera</p>
                        </DownContent>
                    </DetailItem>
                </Grid>
                <Grid item md={4}>
                    <DetailItem>
                        <img src={DeadliftImage} alt=""/>
                        <DownContent>
                            <h4>Peso Muerto</h4>
                            <span>Espalda/Lumbar</span>
                            <p>Es un gran ejercicio para trabajar las piernas y glúteos al completo además de otros grupos musculares como el abdomen, 
                                espalda baja e incluso brazos. Se levanta la barra desde el suelo hasta la cintura.</p>
                        </DownContent>
                    </DetailItem>
                </Grid>
                <Grid item md={4}>
                    <DetailItem>
                        <img src={BenchPressImage} alt=""/>
                        <DownContent>
                            <h4>Bench Press</h4>
                            <span>Pectoral</span>
                            <p>Es un ejercicio compuesto que entrena los pectorales (músculos del pecho), los tríceps y los deltoides frontales (hombros). 
                            Es un gran potenciador de la masa muscular de la parte superior del cuerpo, e incluso un importante ejercicio para las mujeres 
                            que quieran entrenar su fuerza de empuje.</p>
                        </DownContent>
                    </DetailItem>
                </Grid>
            </Grid>
        </DetailsContainer>
    );
}

export default Details;