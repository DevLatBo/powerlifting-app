import { createSlice } from '@reduxjs/toolkit';


const liftSlice = createSlice({
    name: 'lift',
    initialState: {
        prs: [],
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
            state.processed = false;
        },
        confirmSuccessfull(state) {
            state.submitted = false;
            state.processed = true;
        },
        clearHistory(state) {
            state.history = [];
        },
        clearPRs(state) {
            state.prs = [];
        },
        getPRs(state, action) {
            const lifts = action.payload.lifts;
            let personalRecords = [];
            let allWeights = [];
            for(let movement in lifts) {
                Object.entries(lifts[movement]).forEach(([key, data])=> {
                    allWeights.push(data.weight);
                });
                let weights = allWeights.map(Number);
                let maxPR = (weights.length) ? Math.max(...weights) : 0;
                personalRecords.push({
                    "movement": movement,
                    "pr": maxPR
                });
                allWeights.splice(0, allWeights.length);
                maxPR = 0;
            }
            state.prs = personalRecords;
        },
        getLastLifts(state, action) {
            const lifts = action.payload.lifts;
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