import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import Title from '../UI/Title/Title';
import { StyledBlock } from '../UI/Styling/General-styling';
import { fetchPRsData } from '../../store/mov-actions';

const PersonalRecords = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const prMovements = useSelector((state) => state.history.prs);
    
    useEffect(() => {
        dispatch(fetchPRsData());
    }, [dispatch]);

    const loader = isLoading && <Spinner size="lg"/>;

    const errorMessage = alertMessage && <Alert type={alertMessage.type}
                        className={alertMessage.class}>
                            {alertMessage.message}
                        </Alert>

    const prs = prMovements.map((lift) => {
        return <PersonalRecordItem key={lift.movement} 
            movement={lift.movement}
            weight={lift.pr} />
    });

    return (
        <Fragment>
            <Title
                mainTitle="Records Personales"
                description="Levantamiento máximo en cada uno de los movimientos."
            />
            <StyledBlock>
                <Grid container 
                    direction="row"
                    justifycontent="center"
                    alignItems="center"
                    sx={{display:"inline-flex"}}>
                        {prs}
                        {loader}
                        {errorMessage}
                </Grid>
            </StyledBlock>
        </Fragment>
    );
}

export default PersonalRecords;
