import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sdIsVisible: false, 
        alertMessage: null,
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
        removeAlert(state) {
            state.alertMessage = null;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;