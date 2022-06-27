import React, {useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from "@material-ui/core/Grid";

import MovementLink from './Movement/MovementLink';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { StyledBlock, StyledTitlePage } from '../UI/Styling/General-styling';
import { fetchMovementsData } from '../../store/mov-actions';
import { movActions } from '../../store/mov-slice';

const Movements = (props) => {
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const movements = useSelector((state) => state.mov.movements);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(movActions.reset());
        }
    }, [dispatch]);
    
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
