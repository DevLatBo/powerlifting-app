import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';

const StyledGrid = styled(Grid)`
    margin: 20px 0px;
`;

const PersonalRecords = (props) => {
    const movements = ["Deadlift", "Squat", "Bench Press"];
    const prs = movements.map((movement) => {
       return <PersonalRecordItem key={movement} movement={movement}/>
    })
    return (
        <div>
            <h2>Personal Records</h2>
            <StyledGrid container 
                direction="row"
                justifycontent="center"
                alignItems="center"
                sx={{display:"inline-flex"}}>
                {prs}
            </StyledGrid>
            <LastRecords/>
        </div>
    );
}

export default PersonalRecords;