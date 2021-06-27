import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

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
    let info = null;
    info = props.movs.map((mov) => {
      return (
        <Grid item md={4} key = {mov.title}>
            <DetailItem>
                <img src={`assets/images/${mov.image}`} alt=""/>
                <DownContent>
                    <h4>{mov.title}</h4>
                    <span>{mov.body}</span>
                    <p>{mov.description}</p>
                </DownContent>
            </DetailItem>
        </Grid> 
      );             
    })
    return (
        <DetailsContainer>
            <Grid container>
                <SectionHeading>
                    <h2>Movimientos del <em>Powerlifting</em></h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </SectionHeading>
                {info}
            </Grid>
        </DetailsContainer>
    );
}

export default Details;