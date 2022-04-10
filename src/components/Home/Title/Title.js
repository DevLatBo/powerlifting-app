import React from 'react';
import Grid from '@material-ui/core/Grid';

import { StyledMainTitleSection } from './Title-styling';

const Header = (props) => {
    return (
        <StyledMainTitleSection image={`/assets/images/page-heading-background.jpg`}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>POWERLIFTING</h1>
                    <span>Levantamiento de potencia</span>
                </Grid>
            </Grid>
        </StyledMainTitleSection>
    );
}

export default Header;
