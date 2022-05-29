import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sdIsVisible: false, 
        alertMessage: null,
        popupData: null,
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
        showPopup(state, action) {
            state.popupData = {
                title: action.payload.title,
                message: action.payload.message,
            };
        },
        closePopup(state) {
            state.popupData = null;
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
        clearAlert(state) {
            state.alertMessage = null;
            if(state.error) {
                state.error = null;
            }
        },
        setError(state, action) {
            state.error = action.payload.error
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;