import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    prs: [],
    table: {
        rowsPerPageOptions: [10],
        page: 0,
        rowsPerPage: 10,
    },
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        reset(state) {
            Object.assign(state, initialState);
        },
        setPage(state, action) {
            state.table.page = action.payload.page;
        },
        getPRs(state, action) {
            const lifts = action.payload.lifts;
            const movements = action.payload.movements;
            let personalRecords = [];
            let allWeights = [];
            Object.entries(movements).forEach(([movement]) => {
                let maxPR = 0;
                if(typeof lifts[movement] !== 'undefined') {
                    Object.entries(lifts[movement]).forEach(([key, data]) => allWeights.push(data.weight));
                    let weights = allWeights.map(Number);
                    maxPR = (weights.length) ? Math.max(...weights) : 0;
                    personalRecords[movement] = maxPR;
                }
                personalRecords.push({
                    "movement": movement,
                    "pr": maxPR
                });
            });
            state.prs = personalRecords;
        },
        getAllLifts(state, action) {
            const lifts = action.payload.lifts;
            const loadedLifts = [];
            for(let movement in lifts) {
                Object.entries(lifts[movement]).forEach( ([key, data]) => {
                    loadedLifts.push({
                        id: key,
                        movement: movement,
                        date: data.date,
                        time: data.time,
                        repetition: data.repetition,
                        weight: data.weight,
                    });
                });
            }
            loadedLifts.sort((a,b) => (a.time < b.time) ? 1:-1);
            state.data = loadedLifts;
        },
        removeHistoryItem(state, action) {
            const id = action.payload.liftId;
            const newCollection = state.data.filter((h) => h.id !== id);
            state.data = newCollection;
        },
    },

});

export const historyActions = historySlice.actions;

export default historySlice;