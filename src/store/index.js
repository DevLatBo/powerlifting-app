import { configureStore } from "@reduxjs/toolkit";

import sideDrawerSlice from './sideDrawer-slice';

const store = configureStore({
    reducer: { sd: sideDrawerSlice.reducer },
});

export default store;