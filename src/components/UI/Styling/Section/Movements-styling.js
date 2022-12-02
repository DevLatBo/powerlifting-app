import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';

export const StyledGrid = styled(Grid)`
    display: inherit;
    & .movement {
        background: linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%);
        box-shadow: 0 5px 0 darkred;
        color: white;
        border-radius: 35px;
        margin: 20px auto;
        text-align: center;
        padding: 50px 20px;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        cursor: pointer;
        width: 20vw;
        font-size: 1rem;
    }
    & .movement:active {
        box-shadow: none;
        top: 5px;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
        & .movement {
            width: 25vw;
        }
    }
    @media (min-width: 320px) and (max-width: 767px) {
        & .movement {
            width: 55vw;
        }
    }
`;

export const StyledForm = styled.div`
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 2px 3px #CCC;
    border: 1px solid #EEE;
    padding: 10px;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 45vw;
    }
    @media (max-width: 768px) {
        width: 60vw;
    }
`;
