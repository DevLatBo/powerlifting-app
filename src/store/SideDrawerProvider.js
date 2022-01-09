import { useReducer } from "react";

import SideDrawerContext from './sideDrawer-context';


const defaultSideDrawerState = {
    drawerOpen: false,
};

const sideDrawerReducer = (state, action) => {
    if(action.type === 'OPEN') {
        let flag = false;
        if(!state.drawerOpen){
            flag = true;
        }
        return {
            drawerOpen: flag,
        };
    }
    if(action.type === 'CLOSE') {
        let flag = true;
        if(state.drawerOpen){
            flag = false;
        }
        return {
            drawerOpen: flag,
        }
    }
    return defaultSideDrawerState;
};

const SideDrawerProvider = (props) => {
    const [sideDrawerState, dispatchSideDrawerAction] = useReducer(
        sideDrawerReducer,
        defaultSideDrawerState
    );

    const openSideDrawerHandler = () => {
        dispatchSideDrawerAction({ type: 'OPEN' });
    }
    
    const closeSideDrawerHandler = () => {
        dispatchSideDrawerAction({ type: 'CLOSE' });
    }

    const SDContext = {
        drawerOpen: sideDrawerState.drawerOpen,
        openSideDrawer: openSideDrawerHandler,
        closeSideDrawer: closeSideDrawerHandler, 
    };

    return (
        <SideDrawerContext.Provider value={SDContext}>
            {props.children}
        </SideDrawerContext.Provider>
    );
    
}

export default SideDrawerProvider;