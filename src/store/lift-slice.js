import { createSlice } from '@reduxjs/toolkit';


const liftSlice = createSlice({
    name: 'lift',
    initialState: {
        pr: 0,
        history: [],
        formIsValid: false,
        submitted: false,
        processed: false,
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
            state.form = action.payload.form;
        },
        setSubmitOn(state) {
            state.submitted = true;
        },
        confirmSuccessFul(state) {
            state.submitted = false;
            state.processed = true;
        },
        clearHistory(state) {
            state.history = [];
        },
        restartPR(state) {
            state.pr = 0;
        },
        getMaxPR(state, action){
            const lifts = action.payload.liftsData;
            const liftsArray = [];
            for(let key in lifts) {
                liftsArray.push(
                    lifts[key].weight
                );
            }
            const allLifts = liftsArray.map(Number);
            const maxPR = (allLifts.length) ? Math.max(...allLifts) : 0;
            state.pr = maxPR;
        },
        getLastLifts(state, action) {
            const lifts = action.payload.history;
            const loadedLifts = [];
            for(let movement in lifts) {
                Object.entries(lifts[movement]).forEach( ([key, data]) => {
                    loadedLifts.push({
                        movement: movement,
                        date: data.date,
                        time: data.time,
                        repetition: data.repetition,
                        weight: data.weight,
                    });
                });
            }
            loadedLifts.sort((a,b) => (a.time < b.time) ? 1:-1);
            const updatedHistory = (loadedLifts.length >=5) ? loadedLifts.slice(0,5) : loadedLifts;
            state.history = updatedHistory;
        },
    }
});

export const liftActions = liftSlice.actions;

export default liftSlice;