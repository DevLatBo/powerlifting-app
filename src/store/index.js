import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice';
import liftSlice from './lift-slice';
import movSlice from './mov-slice';
import historySlice from './history-slice';


const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        lift: liftSlice.reducer,
        mov: movSlice.reducer,
        history: historySlice.reducer,
    },
});

export default store;