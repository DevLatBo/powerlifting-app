import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sdIsVisible: false, 
        alertMessage: null,
        loaderIsVisible: null,
        error: null,
    },
    reducers: {
        openSideDrawer(state) {
            state.sdIsVisible = true;
        },
        closeSideDrawer(state) {
            state.sdIsVisible = false;
        },
        showAlert(state, action) {
            state.alertMessage = {
                type: action.payload.type,
                class: action.payload.class,
                message: action.payload.message,
            };
        },
        showLoader(state) {
            state.loaderIsVisible = true;
        },
        hideLoader(state) {
            state.loaderIsVisible = false;
        },
        removeAlert(state) {
            state.alertMessage = null;
        },
        setError(state, action) {
            state.error = action.payload.error
        },
        clearError(state) {
            state.error = null;
            state.alertMessage = null;
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;