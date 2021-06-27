import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import axios from '../../axios-records';
import {updateObject, checkValidity} from '../../shared/utility';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const FormWeight = styled.div`
    margin: 20px auto;
    width: 60%;
    text-align: center;
    box-shadow: 0 2px 3px #CCC;
    border: 1px solid #EEE;
    padding: 10px;
    box-sizing: border-box;
    & h4 {
        font-size: 40px;
    }
`;
const WeightData = (props) => {
    const [weightForm, setWeightForm] = useState({
        weight: {
            elementType: 'input',
            elementClass: 'I    nputNumberLift',
            elementConfig: {
                variant: "outlined",
                label: "Peso",
                type: 'number',
                placeholder: 'Insert Weight',
            },
            value: '0',
            validation: {
                required: 'true',
                isPositive: 'true'
            },
            valid: false,
            touched: false,
            required: true,
        }
    });
    const [ formIsValid, setFormIsValid] = useState(false);

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
        }
        const liftData = {
            weight: formData
        };
        props.onLiftWeight(liftData);
    };

    const formElementsArray = [];
    for( let key  in weightForm) {
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
            <h4>Peso a Levantar</h4>
            {form}
        </FormWeight>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        onLiftWeight: (liftData) => dispatch(actions.addLift(liftData))
    }
}

export default connect(null, mapDispatchToProps)(withErrorHandler(WeightData, axios));