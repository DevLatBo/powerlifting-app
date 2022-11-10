import React from 'react';
import Grid from '@material-ui/core/Grid';

import { StyledHomeTitle } from '../UI/Styling/Section/Home-styling';

const Header = (props) => {
    return (
        <StyledHomeTitle image={`/assets/images/page-heading-background.jpg`}>
            <Grid container>
                <Grid item xs={12}>
                    <video autoPlay loop muted>
                        <source src={`assets/video/devlifthome.mp4`} type='video/mp4' />
                    </video>
                    <div className="title">
                        <h1>DEVLIFT</h1>
                        <span>Levantamiento de potencia</span>
                    </div>
                </Grid>
            </Grid>
        </StyledHomeTitle>
    );
}

export default Header;
