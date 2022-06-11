import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { liftActions } from '../../../../store/lift-slice';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import { updateObject, checkValidity } from '../../../../shared/utility';
import { StyledForm } from '../../../UI/Styling/Section/Movements-styling';

const MovementItemForm = (props) => {
    const formIsValid = useSelector((state) => state.lift.formIsValid);
    const liftForm = useSelector((state) => state.lift.form);
    const dispatch = useDispatch();

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(liftForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, liftForm[inputIdentifier].control),
        });
        const updatedLiftForm = updateObject(liftForm, {
            [inputIdentifier]:  updatedFormElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedLiftForm){
            formIsValid = updatedLiftForm[inputIdentifier].valid && formIsValid;
        };
        dispatch(liftActions.setFormElements({form:updatedLiftForm}));
        dispatch(liftActions.setFormValidation({valid: formIsValid}));
    };

    const liftHandler = (event) => {
        event.preventDefault();
        const formData = {};
        const today = new Date();
        for(let formElementIdentifier in liftForm) {
            formData[formElementIdentifier] = liftForm[formElementIdentifier].value;
            formData['date'] = today.toISOString().split('T')[0];
            formData['time'] = ((today.getHours() < 10) ? '0' + today.getHours() : today.getHours()) + ":" + 
                ((today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes());
        }
        props.onAddLift(formData);

        if(formIsValid) {
            const defaultState = {
                value: "",
                valid: false,
            };
            const updatedWeight = updateObject(liftForm.weight, defaultState);
            const updatedRepetition = updateObject(liftForm.repetition, defaultState);
            
            
            const updatedLiftForm = updateObject(liftForm, {
                "weight": updatedWeight,
                "repetition":updatedRepetition,
            });

            dispatch(liftActions.setFormElements({form: updatedLiftForm}));
            dispatch(liftActions.setFormValidation({valid: false}));
        }
    };

    const formElementsArray = [];
    for( let key in liftForm) {
        formElementsArray.push({
            id: key,
            config: liftForm[key]
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