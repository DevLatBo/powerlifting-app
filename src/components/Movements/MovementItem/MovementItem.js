import {React} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MovementItemForm from './MovementItemForm/MovementItemForm';
import LiftContext from '../../../store/lift-context';

const MovementStyled = styled.div`
    & h1 {
        text-align: center;
        font-size: 3.5rem;
        text-transform: capitalize;
    }
`;
const MovementItem = (props) => {
    const liftCtx = useContext(LiftContext);
    let { movement } = useParams();
    const addLiftHandler = (lift) => {
        liftCtx.addLift(lift);
    };
    return (
        <MovementStyled>
            <h1>{movement}</h1>
            <MovementItemForm onAddLift = {addLiftHandler} />
        </MovementStyled>
    )
};
export default MovementItem;