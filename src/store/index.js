import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice';
import liftSlice from './lift-slice';


const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        lift: liftSlice.reducer,
    },
});

export default store;