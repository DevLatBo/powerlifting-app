import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { StyledBox } from '../../UI/Styling/Section/PR-styling';
import Spinner from '../../UI/Loader/Loader';
import Alert from '../../UI/Alert/Alert';
import { fetchRecordByMovement } from '../../../store/mov-actions';

const PersonalRecordItem = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const maxPR = useSelector((state) => state.lift.pr);

    useEffect(() => {
        dispatch(fetchRecordByMovement(props.id))
    },[dispatch, props.id]);
    const loader = isLoading && <Spinner size="sm" />;

    const errorMessage = alertMessage && <Alert type={alertMessage.type} 
                            className={alertMessage.class}>
                            {alertMessage.message}
                        </Alert>;

    return(
        <Grid item xs={12} md={4}>
            <StyledBox>
                <Card variant="outlined" className="cardMov">
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} 
                                color="white" 
                                gutterBottom 
                                className="subtitleMov">
                            {props.movement}
                        </Typography>
                        <Typography sx={{ fontSize: 50 }} 
                                variant="h5" 
                                component="div" 
                                className="recordMov" >
                            { 
                                <CountUp start={0} 
                                    end={maxPR} 
                                    suffix=" kg." 
                                    decimals="2" 
                                    duration={3}/> 
                            } 
                            { loader }
                            { errorMessage }
                        </Typography>
                    </CardContent>
                </Card>
            </StyledBox>
        </Grid>
    )
}

export default PersonalRecordItem;
