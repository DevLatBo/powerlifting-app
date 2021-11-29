import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import Spinner from '../../UI/Loader/Loader';
import BoxMessage from '../../UI/BoxMessage/BoxMessage';

const StyledBox = styled(Box)`
    width: 17rem;
    margin: 20px auto;
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
        font-size: 2.5rem;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        width: 15rem;
        .cardMov .recordMov {
            font-size: 2rem;
        }
    }
`;
const PersonalRecordItem = (props) => {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

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
                    responseData[key].weight
                );
            }
            const recordsWeight = loadedRecords.map(Number);
            setRecords(recordsWeight);
            setIsLoading(false);
        }
        fetchRecords().catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }, [props.id]);

    const loader = <Spinner size="sm" />;

    const errorMessage = <BoxMessage type="error" 
                            className="error"
                            message={error}/>;

    const maxPR = (records.length) ? Math.max(...records) : 0;

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
                            { !isLoading && !error && <CountUp start={0} 
                                                    end={maxPR} 
                                                    suffix=" kg." 
                                                    decimals="2" 
                                                    duration={3}/> } 
                            { isLoading && loader }
                            { !isLoading && error && errorMessage }
                        </Typography>
                    </CardContent>
                </Card>
            </StyledBox>
        </Grid>
    )
}

export default PersonalRecordItem;