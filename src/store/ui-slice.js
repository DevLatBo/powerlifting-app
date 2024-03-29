import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sdIsVisible: false, 
    alertMessage: null,
    loaderIsVisible: false,
    error: null,
    liftTable: {
        rowsPerPageOptions: [5],
        page: 0,
        rowsPerPage: 5,
    },
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        reset(state) {
            Object.assign(state, initialState);
        },
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
        clearAlert(state) {
            state.alertMessage = null;
            if(state.error) {
                state.error = null;
            }
        },
        setError(state, action) {
            state.error = action.payload.error
        },
        setPage(state, action) {
            state.liftTable.page = action.payload.page;
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;