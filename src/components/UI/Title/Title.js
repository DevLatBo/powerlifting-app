import { StyledTitlePage } from "./Title-styling";

const Title = (props) => {
    return (
        <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
            <h2>{props.mainTitle}</h2>
            <h3>{props.description}</h3>
        </StyledTitlePage>
    );
}

export default Title;