import { Fragment } from 'react';
import { StyledTitlePage } from '../UI/Block/block-styling';
import Grid from '@material-ui/core/Grid';

import Profile from './Profile/Profile';
import SocialNetwork from './SocialNetwork/SocialNetowrk';


const Author = (props) => {
    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>Programador</h2>
                <h3>Ing. Oscar Rolando Gamboa Acho</h3>
            </StyledTitlePage>
            <Profile/>
            <SocialNetwork/>
        </Fragment>
    );
};

export default Author;