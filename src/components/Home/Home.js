import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import Aux from '../../hoc/Aux/Aux';
import Header from '../UI/Header/Header';

const HomeOptions = styled(Grid)`
    display: inherit;
    margin-top: 25px;
    & .option {
        background: linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%);
        box-shadow: 0 5px 0 darkred;
        color: white;
        border-radius: 30px;
        padding: 40px 15px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        display: inline-block;
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        & .option {
            margin-top: 30px;
            width: 50%;
        }
    }
    @media (max-width: 768px) {
        & .option {
            margin: 25px auto;
            width: 75%;
        }
    }
    & .option:active {
        box-shadow: none;
        top: 5px;
    }
`;

const Home = (props) => {
    return (
        <Aux>
            <Header/>
            <Grid container 
                direction="row"
                jusfitycontent="center"
                alignItems="center">
                <HomeOptions xs={12} md={6} item={true}>
                    <Link className="option" to="/prs">
                        Records Personales
                    </Link>
                </HomeOptions>
                <HomeOptions xs={12} md={6}  item={true}>
                    <Link className="option" to="/movements">
                        Movimientos
                    </Link>
                </HomeOptions>
            </Grid>
        </Aux>
    );
}

export default Home;