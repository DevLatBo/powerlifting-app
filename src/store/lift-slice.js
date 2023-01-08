import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formIsValid: false,
    form: {
        weight: {
            elementType: 'number',
            elementClass: 'InputLift',
            elementConfig: {
                variant: "outlined",
                label: "Peso",
                type: "number",
                placeholder: "Inserte Peso",
            },
            value: 0,
            control: {
                isEmpty: true,
                isPositive: true,
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
            value: 0,
            control: {
                isEmpty: true,
                isPositive: true,
            },
            valid: false,
            properties: {
                "step": "1",
            },
        },
        flag: {
            elementType: "checkbox",
            elementClass: "InputFlag",
            elementConfig: {
                label: "Valido",
                labelPlacement: "start",
            },
            value: false,
            control: {},
            valid: true,
        }
    },
    data: {
        weight: 0,
        repetition: 0,
        date: "",
        time: "",
        flag: false,
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
        setLiftData(state, action) {
            state.data = action.payload.lift;
            const {weight, repetition, flag} = action.payload.lift;
            state.form = {
                ...state.form,
                weight: {
                    ...state.form.weight,
                    value: weight,
                    valid: true,
                },
                repetition: {
                    ...state.form.repetition,
                    value: repetition,
                    valid: true,
                },
                flag: {
                    ...state.form.flag,
                    value: flag
                }
            };
            state.formIsValid = true;
        }
    }
});

export const liftActions = liftSlice.actions;

export default liftSlice;