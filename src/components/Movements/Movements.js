import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import MovementLink from './Movement/MovementLink';

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
        padding: 50px 20px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        cursor: pointer;
        width: 35%;
        font-size: 18px;
        font-weight: bold;
    }
    & .movGrid .movement:active {
        box-shadow: none;
        top: 5px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        & .movGrid .movement {
            width: 60%;
            font-size: 16px;
        }
    }
`;

const Movements = (props) => {
    const [movements, setMovements] = useState([]);
    useEffect( () => {
        const fetchMovements = async () => {
            const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/movements.json");
            const responseData = await response.json();

            const loadedMovements = [];
            for(const key in responseData) {
                loadedMovements.push({
                    id: key,
                    name: responseData[key].name
                });
            }
            setMovements(loadedMovements);
        }
        fetchMovements().catch((error) => {
            console.log(error);
        });
    },[]);
    

    const movementLinks = movements.map((movement) => {
        return (
            <MovementLink
                key={movement.id}
                route={movement.id}
                name={movement.name}/>
        );
    })
    return (
        <MovOptions container 
            direction="row"
            justifyContent="center"
            alignItems="center">
                {movementLinks}
            {/*<Grid xs={12} md={12} className="movGrid" item={true}>
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
            </Grid>*/}
        </MovOptions>
    );
}

export default Movements;