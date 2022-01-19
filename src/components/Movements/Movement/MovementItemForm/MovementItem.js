import React, {useState, Fragment} from 'react';
import { useParams } from 'react-router-dom';

import { obtainMovementName } from '../../../../shared/utility';
import { StyledAlert } from './MovementItem-styling';
import MovementItemForm from './MovementItemForm';
import Section from '../../../UI/Section/Section';

const MovementItem = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    let { movement } = useParams();
    const movementName = obtainMovementName(movement);
    const addLiftHandler =  async (liftData) => {
        setIsSubmitting(true);
        await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/lifts/"+movement+".json", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                liftData
            ),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
    };
    
    const closeAlert = () => {
        setDidSubmit(false);
    };
    
    return (
        <Fragment>
            <Section type="title-page" imageBackground={`/assets/images/title-background.jpg`}>
                <h2>{movementName}</h2>
                <h3>Ingrese número de repeticiones y peso a levantar.</h3>
            </Section>
            <Section>
                {didSubmit && <StyledAlert onClose={closeAlert}>Levantamiento registrado con exito!</StyledAlert>}
                {isSubmitting && <StyledAlert severity="info">Registrando levantamiento...</StyledAlert>}
                <MovementItemForm movement = {movement} 
                    onAddLift = {addLiftHandler} />
            </Section>
        </Fragment>
    )
};
export default MovementItem;
