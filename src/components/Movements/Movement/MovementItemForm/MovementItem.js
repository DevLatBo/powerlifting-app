import React, {useState, Fragment} from 'react';
import Alert from '@mui/material/Alert';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MovementItemForm from './MovementItemForm';
import Section from '../../../UI/Section/Section';

const StyledAlert = styled(Alert)`
    width: 35vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 60vw;
    }
`;

const MovementItem = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    let { movement } = useParams();
    
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
            <Section>
                {/*<h2>{movement}</h2>*/}
                {didSubmit && <StyledAlert onClose={closeAlert}>Levantamiento registrado con exito!</StyledAlert>}
                {isSubmitting && <StyledAlert severity="info">Registrando levantamiento...</StyledAlert>}
                <MovementItemForm movement = {movement} 
                    onAddLift = {addLiftHandler} />
            </Section>
        </Fragment>
    )
};
export default MovementItem;