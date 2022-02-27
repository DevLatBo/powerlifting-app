import { Fragment } from 'react';
import { StyledTitlePage } from '../UI/Block/block-styling';
const Author = (props) => {
    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>About Me</h2>
                <h3>Oscar Rolando Gamboa Acho</h3>
            </StyledTitlePage>
        </Fragment>
    )
};

export default Author;