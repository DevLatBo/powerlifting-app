import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const DetailsContainer = styled.div`
    background-color: #F7F7F7;
    margin-top: 140px;
    margin-bottom: -140px;
    padding: 120px 0px;
    & .title {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    & .title h2 {
        font-size: 36px;
        font-weight: 600;
        color: #1E1E1E;
    }
    & .title em {
        font-style: normal;
        color: #FF0000;
    }
    & .title span {
        display: block;
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 15px;
        color: #666;
        letter-spacing: 1px;
    }
    & .ejercicio {
        margin-bottom: 30px;
    }
    & .ejercicio img {
        width: 90%;
        height: 15rem;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        & .ejercicio {
            margin-bottom: 0px;
        }
    }
    & .ejercicio .definition {
        background-color: #FFF;
        padding: 30px;
    }
    & .ejercicio .definition h4 {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
    }
    & .ejercicio .definition span {
        color: #FF0000;
        font-weight: 600;
        font-size: 14px;
        display: block;
        margin-bottom: 15px;
    }
    & .ejercicio .definition p {
        margin-bottom: 10px;
    }
`;

const Details = (props) => {
    let info = null;
    info = props.movs.map((mov) => {
      return (
        <Grid item md={4} key = {mov.id}>
            <div className="ejercicio">
                <img src={`assets/images/${mov.image}`} alt=""/>
                <div className = "definition">
                    <h4>{mov.title}</h4>
                    <span>{mov.body}</span>
                    <p>{mov.description}</p>
                </div>
            </div>
        </Grid> 
      );             
    })
    return (
        <DetailsContainer>
            <Grid container>
                <div className="title">
                    <h2>Movimientos del <em>Powerlifting</em></h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </div>
                {info}
            </Grid>
        </DetailsContainer>
    );
}

export default Details;