import React from 'react';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';

const PersonalRecords = (props) => {
    const movements = ["Deadlift", "Squat", "Bench Press"];
    const prs = movements.map((movement) => {
       return <PersonalRecordItem movement={movement}/>
    })
    return (
        <div>
            <h1>Personal Records</h1>
            <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
                {prs}
            </Grid>
            <LastRecords/>
        </div>
    );
}

export default PersonalRecords;