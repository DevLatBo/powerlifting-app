import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { liftActions } from '../../../../store/lift-slice';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import { updateObject, checkValidity, getValueInput } from '../../../../shared/utility';
import { StyledForm } from '../../../UI/Styling/Section/Movements-styling';

const MovementItemForm = (props) => {
    const isEdit = props.isEdit;
    const formIsValid = useSelector((state) => state.lift.formIsValid);
    const form = useSelector((state) => state.lift.form);
    const data = useSelector((state) => state.lift.data);
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        return () => {
            dispatch(liftActions.reset());
        }
    }, [dispatch]);

    const inputChangeHandler = (event, inputIdentifier) => {
        const inputValue = getValueInput(event, form[inputIdentifier].elementType);
        const updatedFormElement = updateObject(form[inputIdentifier], {
            value: inputValue,
            valid: checkValidity(event.target.value, form[inputIdentifier].control),
        });
        const updatedForm = updateObject(form, {
            [inputIdentifier]:  updatedFormElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        };
        dispatch(liftActions.setFormElements({form:updatedForm}));
        dispatch(liftActions.setFormValidation({valid: formIsValid}));
    };

    const liftHandler = (event) => {
        event.preventDefault();
        const formData = {};
        const today = new Date();
        for(let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
            if(isEdit) {
                formData['date'] = data.date;
                formData['time'] = data.time;
                continue;
            }
            formData['date'] = today.toISOString().split('T')[0]; // [YY-mm-dd]
            formData['time'] = ((today.getHours() < 10) ? '0' + today.getHours() : today.getHours()) + ":" + 
                ((today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes());
        }
        
        props.onActionLift(formData) ;

        if(formIsValid) {
            const updatedWeight = updateObject(form.weight, {value: 0, valid: false});
            const updatedRepetition = updateObject(form.repetition, {value: 0, valid: false});
            const updatedFlag = updateObject(form.flag, {value: false, valid: true})

            const updatedForm = updateObject(form, {
                "weight": updatedWeight,
                "repetition":updatedRepetition,
                "flag": updatedFlag,
            });

            dispatch(liftActions.setFormElements({form: updatedForm}));
            dispatch(liftActions.setFormValidation({valid: false}));
            
            
            setTimeout(() => {
                history.push('/history');
            }, 200);
            
        }
    };

    const formElementsArray = [];

    for( let key in form ) {
        formElementsArray.push({
            id: key,
            config: form[key]
        });
    }
    
    const btnStyle = (formIsValid)?"btnLift":"btnLiftDisabled";
    let formSection = (
        <form onSubmit={liftHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id} 
                    label={formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    elementClass={formElement.config.elementClass}
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
            {formSection}
        </StyledForm>
    );
}

export default React.memo(MovementItemForm);