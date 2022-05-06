import { createSlice } from '@reduxjs/toolkit';


const liftSlice = createSlice({
    name: 'lift',
    initialState: {
        formIsValid: false,
        liftForm: {
            weight: {
                elementType: 'number',
                elementClass: 'InputLift',
                elementConfig: {
                    variant: "outlined",
                    label: "Peso a Levantar",
                    type: "number",
                    placeholder: "Inserte Peso",
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
                    placeholder: "Inserte Repeticiones",
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
        },
    },
    reducers: {
        setFormValidation(state, action) {
            state.formIsValid = action.payload.valid;
        },
        setFormElements(state, action) {
            state.liftForm = action.payload.form;
        }
    }
});

export const liftActions = liftSlice.actions;

export default liftSlice;