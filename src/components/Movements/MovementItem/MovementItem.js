import {React} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MovementItemForm from './MovementItemForm/MovementItemForm';


const MovementStyled = styled.div`
    & h1 {
        text-align: center;
        font-size: 3.5rem;
        text-transform: capitalize;
    }
`;
const MovementItem = (props) => {
    let { movement } = useParams();
    return (
        <MovementStyled>
            <h1>{movement}</h1>
            <MovementItemForm/>
        </MovementStyled>
    )
};
export default MovementItem;