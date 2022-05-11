import React, {useEffect, useState, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from "@material-ui/core/Grid";

import useHttp from '../../hooks/use-http';
import MovementLink from './Movement/MovementLink';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { StyledBlock, StyledTitlePage } from '../UI/Styling/General-styling';
import { fetchMovementsData } from '../../store/mov-actions';

const Movements = (props) => {
    /*const [movements, setMovements] = useState([]);
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
    },[fetchMovements]);*/
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const movements = useSelector((state) => state.mov.movements);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMovementsData());
    }, [dispatch]);
    
    const movementLinks = movements.map((movement) => {
        return (
            <MovementLink
                key={movement.id}
                route={movement.id}
                name={movement.name}/>
        );
    });

    const loader = isLoading && <Spinner size="lg"/>
        
    const errorMessage = alertMessage && <Alert type={alertMessage.type} 
        className={alertMessage.class}>
            {alertMessage.message}
        </Alert>;

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
                        {movementLinks}
                        {loader}
                        {errorMessage}
                </Grid>
            </StyledBlock>
        </Fragment>
    );
}

export default Movements;
