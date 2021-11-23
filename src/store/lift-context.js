import React from 'react';

const liftContext = React.createContext({
    lifts: [],
    clearLift: () => {},
});

export default liftContext;