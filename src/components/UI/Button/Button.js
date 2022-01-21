import { StyledButton } from "./Button-styling";

const button = (props) => {
    return(
        <StyledButton className={["Btn", props.btnType].join(' ')}
                disabled={props.disabled}
                onClick={props.clicked}>
            {props.children}
        </StyledButton>
    );
}

export default button;
