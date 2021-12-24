import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const StyledTitle = styled.div`
    text-align: center;
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 25vh 0px 25vh 0px;
    color: #FFF;
    margin: -24px;

    & h1 {
        text-transform: capitalize;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 0.5rem;
        margin-bottom: 18px;
    }

    & span {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.125rem;
        color: #FFF;
        display: block;
    }

    @media (max-width: 767px) {
        & h1 { 
            font-size: 1.75rem;
        }
        & span {
            font-size: 1rem;
        }
    }
`;
const Header = (props) => {
    return (
        <StyledTitle image={`assets/images/page-heading-background.jpg`}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>POWERLIFTING</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </StyledTitle>
    );
}

export default Header;
