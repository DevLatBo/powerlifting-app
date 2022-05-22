import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { StyledTitlePage, StyledBlock } from '../UI/Styling/General-styling';
import { fetchLiftsData } from '../../store/mov-actions';

const PersonalRecords = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const prMovments = useSelector((state) => state.lift.prs);

    useEffect(() => {
        dispatch(fetchLiftsData("PRs"));
    }, [dispatch]);

    const loader = isLoading && <Spinner size="lg"/>;

    const errorMessage = alertMessage && <Alert type={alertMessage.type}
                        className={alertMessage.class}>
                            {alertMessage.message}
                        </Alert>
    
    const prs = prMovments.map((lift) => {
        return <PersonalRecordItem key={uuidv4()} 
            movement={lift.movement}
            weight={lift.pr} />
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
