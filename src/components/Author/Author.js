import { Fragment } from 'react';
import { StyledTitlePage } from '../UI/Block/block-styling';

import Profile from './Profile/Profile';


const Author = (props) => {
    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>Programador</h2>
                <h3>Ing. Oscar Rolando Gamboa Acho</h3>
            </StyledTitlePage>
            <Profile/>
        </Fragment>
    );
};

export default Author;