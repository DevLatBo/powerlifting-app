import {useReducer} from 'react';

import LiftContext from './lift-context';

const defaultLiftState = {
    lifts: [],
};


const liftReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedLifts = state.lifts.concat(action.lift);
        return { 
            lifts: updatedLifts
        };
    }
    if(action.type === 'CLEAR') { 
        return defaultLiftState;
    }
    return defaultLiftState;
}

const LiftProvider = (props) => {
    const [liftState, dispatchLiftAction] = useReducer(
        liftReducer,
        defaultLiftState
    );

    const addLiftHandler = (lift) => {
        dispatchLiftAction({ type: 'ADD', lift: lift});
    };
    
    const clearLiftHandler = () => {
        dispatchLiftAction({ type: 'CLEAR'});
    }

    const liftContext = {
        lifts: liftState.lifts,
        addLift: addLiftHandler,
        clearLift: clearLiftHandler,
    };

    return (
        <LiftContext.Provider value = {liftContext}>
            {props.children}
        </LiftContext.Provider>
    )
}

export default LiftProvider;
