import { StyledAlert } from './BoxMessage-styling';

const BoxMessage = (props) => {
    return (
        <StyledAlert severity={props.type}
            className={props.className}
            onClose={props.onClose}>
                {props.children}
        </StyledAlert>
    );
}

export default BoxMessage;