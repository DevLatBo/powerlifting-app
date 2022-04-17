import React, {useEffect, useState, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";

import useHttp from '../../hooks/use-http';
import MovementLink from './Movement/MovementLink';
import Spinner from '../UI/Loader/Loader';
import BoxMessage from '../UI/BoxMessage/BoxMessage';
import { StyledBlock, StyledTitlePage } from '../UI/Styling/General-styling';

const Movements = (props) => {
    const [movements, setMovements] = useState([]);
    const { isLoading, error, sendRequest: fetchMovements } = useHttp();

    useEffect(() => {
        const obtainMovements = (movements) => {
            const loadedMovements = [];
            for(let key in movements){
                loadedMovements.push({
                    id: key,
                    name: movements[key].name
                });
            }
            setMovements(loadedMovements);
        }

        fetchMovements(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/movements.json"}, 
            obtainMovements
        );
    },[fetchMovements]);
    
    const movementLinks = movements.map((movement) => {
        return (
            <MovementLink
                key={movement.id}
                route={movement.id}
                name={movement.name}/>
        );
    });

    const loader = <Spinner size="lg"/>
        
    const errorMessage = <BoxMessage type="error" 
        className="error">
            {error}
        </BoxMessage>;

    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>Movimientos del Powerlifting</h2>
            </StyledTitlePage>
            <StyledBlock>
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                        {!isLoading && !error && movementLinks}
                        {isLoading && loader}
                        {!isLoading && error && errorMessage}
                </Grid>
            </StyledBlock>
        </Fragment>
    );
}

export default Movements;
