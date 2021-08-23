import {React} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import WeightData from './WeightData/WeightData';


const MovementStyled = styled.div`
    & h1 {
        text-align: center;
        font-size: 3.5rem;
        text-transform: capitalize;
    }
`;
const Movement = (props) => {
    let { movement } = useParams();
    return (
        <MovementStyled>
            <h1>{movement}</h1>
            <WeightData/>
        </MovementStyled>
    )
};
export default Movement;