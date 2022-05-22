import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { obtainMovementName } from '../../../shared/utility';
import { StyledBox } from '../../UI/Styling/Section/PR-styling';

const PersonalRecordItem = (props) => {
    return(
        <Grid item xs={12} md={4}>
            <StyledBox>
                <Card variant="outlined" className="cardMov">
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} 
                                color="white" 
                                gutterBottom 
                                className="subtitleMov">
                            {obtainMovementName(props.movement)}
                        </Typography>
                        <Typography sx={{ fontSize: 50 }} 
                                variant="h5" 
                                component="div" 
                                className="recordMov" >
                            <CountUp 
                                start={0} 
                                end={props.weight} 
                                suffix=" Kg." 
                                decimals="2" 
                                duration={3}
                            />
                        </Typography>
                    </CardContent>
                </Card>
            </StyledBox>
        </Grid>
    )
}

export default PersonalRecordItem;
