import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { StyledTitlePage, StyledBlock } from '../UI/Styling/General-styling';
import { fetchMovementsData } from '../../store/mov-actions';

const PersonalRecords = (props) => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const movements = useSelector((state) => state.mov.movements);

    useEffect(() => {
        dispatch(fetchMovementsData());
    }, [dispatch]);

    const loader = isLoading && <Spinner size="lg"/>;

    const errorMessage = alertMessage && <Alert type={alertMessage.type}
                        className={alertMessage.class}>
                            {alertMessage.message}
                        </Alert>
    

    const prs = movements.map((movement) => {
        return <PersonalRecordItem key={movement.id} 
                id={movement.id}
                movement={movement.name}/>
    });

    return (
        <Fragment>
            <StyledTitlePage type="title-page" imageBackground={`/assets/images/title-background.jpg`}>
                <h2>Records Personales</h2>
                <h3>PR & Historial</h3>
            </StyledTitlePage>
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
            <StyledBlock>
                <LastRecords/>
            </StyledBlock>
        </Fragment>
    );
}

export default PersonalRecords;
