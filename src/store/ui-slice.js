import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sdIsVisible: false, 
        alertMessage: null,
        loader: false,
    },
    reducers: {
        openSideDrawer(state) {
            state.sdIsVisible = true;
        },
        closeSideDrawer(state) {
            state.sdIsVisible = false;
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;