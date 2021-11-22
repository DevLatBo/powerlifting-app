import {useReducer} from 'react';

import LiftContext from './lift-context';

const defaultLiftState = {
    lifts: [],
};


const liftReducer = (state, action) => {
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

    const clearLiftHandler = () => {
        dispatchLiftAction({ type: 'CLEAR'});
    }

    const liftContext = {
        lifts: liftState.lifts,
        clearLift: clearLiftHandler,
    };

    return (
        <LiftContext.Provider value = {liftContext}>
            {props.children}
        </LiftContext.Provider>
    )
}

export default LiftProvider;
