import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formIsValid: false,
    form: {
        weight: {
            elementType: 'number',
            elementClass: 'InputLift',
            elementConfig: {
                variant: "outlined",
                label: "Peso a Levantar",
                type: "number",
                placeholder: "Inserte Peso",
            },
            value: "",
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
            value: "",
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
    table: {
        rowsPerPageOptions: [10],
        page: 0,
        rowsPerPage: 10,
    },
}

const liftSlice = createSlice({
    name: 'lift',
    initialState,
    reducers: {
        reset(state) {
            Object.assign(state, initialState);
        },
        setFormValidation(state, action) {
            state.formIsValid = action.payload.valid;
        },
        setFormElements(state, action) {
            state.form = action.payload.form;
        },
    }
});

export const liftActions = liftSlice.actions;

export default liftSlice;