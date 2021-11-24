import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import Spinner from '../../UI/Loader/Loader';

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
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const fetchRecords = async () => {
            const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/lifts/"+props.id+".json");
            if(!response.ok) {
                throw new Error("Something wrong happened!");
            }
            const responseData = await response.json();
    
            let loadedRecords = [];
            
            for(let key in responseData) {
                loadedRecords.push(
                    responseData[key].lift.weight
                );
            }
            const recordsWeight = loadedRecords.map(Number);
            setRecords(recordsWeight);
            setIsLoading(false);
        }
        fetchRecords();
    }, [props.id]);

    const loader = <Spinner size="sm" />;

    const maxPR = Math.max(...records);

    return(
        <Grid item xs={12} lg={4}>
            <StyledBox>
                <Card variant="outlined" className="cardMov">
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="white" gutterBottom className="subtitleMov">
                            {props.movement}
                        </Typography>
                        <Typography sx={{ fontSize: 50 }} variant="h5" component="div" className="recordMov" >
                            { !isLoading && <CountUp start={0} 
                                                    end={maxPR} 
                                                    suffix="kg." 
                                                    decimals="2" 
                                                    duration={1.5}/> } 
                            { isLoading && loader }
                        </Typography>
                    </CardContent>
                </Card>
            </StyledBox>
        </Grid>
    )
}

export default PersonalRecordItem;