import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

const MovOptions = styled(Grid)`
    margin-top: 30px;
    & .movGrid {
        display: inherit;
    }
    & .movGrid .movement {
        background: linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%);
        box-shadow: 0 5px 0 darkred;
        color: white;
        border-radius: 35px;
        margin: 20px auto;
        text-align: center;
        padding: 50px 0px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        cursor: pointer;
        width: 75%;
        font-size: 23px;
        font-weight: bold;
    }
    & .movGrid .movement:active {
        box-shadow: none;
        top: 5px;
    }
`;

const Movements = (props) => {
    return (
        <MovOptions container 
            direction="row"
            justify="center"
            alignItems="center">
            <Grid xs={12} md={12} className="movGrid" item={true}>
                <Link className="movement"
                    to= "/movements/bench-press">
                        Bench Press
                </Link>
            </Grid>
            <Grid xs={12} md={12} className="movGrid" item={true}>
                <Link className="movement"
                    to="/movements/squat">
                        Squat
                </Link>
            </Grid>
            <Grid xs={12} md={12} className="movGrid" item={true}>
                <Link className="movement"
                    to= "/movements/deadlift">
                        Deadlift
                </Link>
            </Grid>
        </MovOptions>
    );
}

export default Movements;