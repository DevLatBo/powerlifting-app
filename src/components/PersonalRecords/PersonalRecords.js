import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';

const StyledGrid = styled(Grid)`
    margin: 40px 0px;
`;

const PersonalRecords = (props) => {
    const movements = ["Deadlift", "Squat", "Bench Press"];
    const prs = movements.map((movement) => {
       return <PersonalRecordItem movement={movement}/>
    })
    return (
        <div>
            <h1>Personal Records</h1>
            <StyledGrid container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{display:"inline-flex"}}>
                {prs}
            </StyledGrid>
            <LastRecords/>
        </div>
    );
}

export default PersonalRecords;