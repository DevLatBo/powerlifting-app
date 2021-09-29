import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    width: 20rem;
    margin: 25px auto;
    .cardMov {
        border-radius: 25px;
        background-color: #FF0000;
        color: #FFFFFF;
    }
    .cardMov .subtitleMov {
        font-weight: bold;
    }
    .cardMov .recordMov {
        margin-top: 15px;
        text-align: center;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        width: 15rem;
    }
`;
const PersonalRecordItem = (props) => {
    return(
        <Grid item xs={12} lg={4}>
            <StyledBox>
                <Card variant="outlined" className="cardMov">
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="white" gutterBottom className="subtitleMov">
                            {props.movement}
                        </Typography>
                        <Typography sx={{ fontSize: 50 }} variant="h5" component="div" className="recordMov" >
                            0 kg.
                        </Typography>
                    </CardContent>
                </Card>
            </StyledBox>
        </Grid>
    )
}

export default PersonalRecordItem;