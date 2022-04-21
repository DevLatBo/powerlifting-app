import { createSlice } from '@reduxjs/toolkit';

const sideDrawerSlice = createSlice({
    name: 'sideDrawer',
    initialState: { isVisible: false },
    reducers: {
        openSideDrawer(state) {
            state.isVisible = true;
        },
        closeSideDrawer(state) {
            state.isVisible = false;
        }
    }
})

export const sideDrawerActions = sideDrawerSlice.actions;

export default sideDrawerSlice;