import React, {useContext} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MovementItemForm from './MovementItemForm';
import LiftContext from '../../../../store/lift-context';

const MovementStyled = styled.div`
    & h2 {
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
            <h2>{movement}</h2>
            <MovementItemForm movement = {movement} 
                onAddLift = {addLiftHandler} />
        </MovementStyled>
    )
};
export default MovementItem;