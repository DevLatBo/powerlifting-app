import React, {useState} from 'react';
import styled from 'styled-components';

import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import {updateObject, checkValidity} from '../../../../shared/utility';

const FormWeight = styled.div`
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 2px 3px #CCC;
    border: 1px solid #EEE;
    padding: 10px;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`;
const MovementItemForm = (props) => {
    const [weightForm, setWeightForm] = useState({
        weight: {
            elementType: 'input',
            elementClass: 'InputCounterLift',
            elementConfig: {
                variant: "outlined",
                label: "Peso a Levantar",
                type: "number",
                placeholder: "Insert Weight",
            },
            value: "0",
            validation: {
                required: true,
                isPositive: "true"
            },
            valid: false,
            touched: false,
        },
        repetition: {
            elementType: "input",
            elementClass: "InputCounterLift",
            elementConfig: {
                variant: "outlined",
                label: "Repeticiones",
                type: "number",
                placeholder: "Number of Repetitions",
            },
            value: "0",
            validation: {
                required: true,
                isPositive: "true",
            },
            valid: false,
            touched: false,
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(weightForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, weightForm[inputIdentifier].validation),
            touched: true,
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
        for( let formElementIdentifier in weightForm) {
            formData[formElementIdentifier] = weightForm[formElementIdentifier].value;
            formData['movement'] = props.movement;
            formData['date'] = new Date().toISOString().split('T')[0];
        }
        const liftData = {
            lift: formData,
        };
        console.log(liftData);
        props.onAddLift(liftData);
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
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation} 
                    touched={formElement.config.touched}
                    changed={(event) => inputChangeHandler(event, formElement.id)} 
                />
            ))}
            <Button btnType={btnStyle} disabled={!formIsValid}>Registrar</Button>
        </form>
    );
    return (
        <FormWeight>
            {form}
        </FormWeight>
    );
}

export default MovementItemForm;