import { createSlice } from "@reduxjs/toolkit";

const movSlice = createSlice({
    name: 'movement',
    initialState: {
        movements: [],
    },
    reducers: {
        replaceMovementsData(state, action) {
            const movements = action.payload.movements;
            const movementsArray = [];
            for(let key in movements) {
                movementsArray.push({
                    id: key,
                    name: movements[key].name,
                    body: movements[key].body,
                    description: movements[key].description,
                    image: movements[key].image
                });
            }
            state.movements = movementsArray;
        }
    },
});

export const movActions = movSlice.actions;

export default movSlice;
