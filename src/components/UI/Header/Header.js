import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Title = styled.div`
    text-align: center;
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 330px 0px 150px 0px;
    color: #FFF;
    margin: -24px;

    & h1 {
        text-transform: capitalize;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 18px;
    }

    & span {
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #FFF;
        display: block;
    }

    @media (max-width: 767px) {
        & h1 { 
            font-size: 30px;
        }
        & span {
            font-size: 15px;
        }
    }
`;
const Header = (props) => {
    return (
        <Title image = {`assets/images/page-heading-background.jpg`}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>POWERLIFTING APP</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </Title>
    );
}

export default Header;
