import React, { useState } from 'react';

import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import { updateObject, checkValidity } from '../../../../shared/utility';
import { StyledForm } from '../../../UI/Styling/Section/Movements-styling';

const MovementItemForm = (props) => {
    const [weightForm, setWeightForm] = useState({
        weight: {
            elementType: 'number',
            elementClass: 'InputLift',
            elementConfig: {
                variant: "outlined",
                label: "Peso a Levantar",
                type: "number",
                placeholder: "Insert Weight",
            },
            value: "0",
            control: {
                isEmpty: true,
                isPositive: "true"
            },
            valid: false,
            properties: {
                "step": "0.25",
            }
        },
        repetition: {
            elementType: "number",
            elementClass: "InputLift",
            elementConfig: {
                variant: "outlined",
                label: "Repeticiones",
                type: "number",
                placeholder: "Number of Repetitions",
            },
            value: "0",
            control: {
                isEmpty: true,
                isPositive: true,
            },
            valid: false,
            properties: {
                "step": "1",
            },
        },
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(weightForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, weightForm[inputIdentifier].control),
        });
        const updatedWeightForm = updateObject(weightForm, {
            [inputIdentifier]:  updatedFormElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedWeightForm){
            formIsValid = updatedWeightForm[inputIdentifier].valid && formIsValid;
        };
        setWeightForm(updatedWeightForm);
        setFormIsValid(formIsValid);
    };

    const liftHandler = (event) => {
        event.preventDefault();
        const formData = {};
        const today = new Date();
        for(let formElementIdentifier in weightForm) {
            formData[formElementIdentifier] = weightForm[formElementIdentifier].value;
            formData['date'] = today.toISOString().split('T')[0];
            formData['time'] = today.getHours() + ":" + today.getMinutes();
        }
        props.onAddLift(formData);

        if(formIsValid) {
            const defaultState = {
                value: "0",
                valid: false,
            };
            const updatedWeight = updateObject(weightForm.weight, defaultState);
            const updatedRepetition = updateObject(weightForm.repetition, defaultState);
            
            
            const updatedWeightForm = updateObject(weightForm, {
                "weight": updatedWeight,
                "repetition":updatedRepetition,
            });

            setWeightForm(updatedWeightForm);
            setFormIsValid(false);
        }
    };

    const formElementsArray = [];
    for( let key in weightForm) {
        formElementsArray.push({
            id: key,
            config: weightForm[key]
        });
    }
    const btnStyle = (formIsValid)?"btnLift":"btnLiftDisabled";
    let form = (
        <form onSubmit={liftHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id} 
                    label={formElement.config.label}
                    elementType={formElement.config.elementType} 
                    elementClass={formElement.config.elementClass}
                    elementConfig={formElement.config.elementConfig}
                    elementProperties={formElement.config.properties}
                    value={formElement.config.value}
                    changed={(event) => inputChangeHandler(event, formElement.id)} 
                />
            ))}
            <Button btnType={btnStyle} disabled={!formIsValid}>Registrar</Button>
        </form>
    );
    return (
        <StyledForm>
            {form}
        </StyledForm>
    );
}

export default MovementItemForm;
