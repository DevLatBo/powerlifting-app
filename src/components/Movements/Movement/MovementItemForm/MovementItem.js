import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
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
    & .notification {
        width:35vw;
        margin: 0 auto;
    }
`;

const MovementItem = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    let { movement } = useParams();
    //console.log(movement);
    const addLiftHandler =  async (liftData) => {
        setIsSubmitting(true);
        await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/lifts/"+movement+".json", {
            method: "POST",
            body: JSON.stringify({
                lift:liftData
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
    };
    
    const closeAlert = () => {
        setDidSubmit(false);
    };
    
    return (
        <MovementStyled>
            <h2>{movement}</h2>
            {didSubmit && <Alert className="notification" onClose={closeAlert}>Levantamiento registrado con exito!</Alert>}
            {isSubmitting && <Alert severity="info" className="notification">Registrando levantamiento...</Alert>}
            <MovementItemForm movement = {movement} 
                onAddLift = {addLiftHandler} />
        </MovementStyled>
    )
};
export default MovementItem;