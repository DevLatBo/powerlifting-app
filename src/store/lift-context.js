import React from 'react';

const liftContext = React.createContext({
    lifts: [],
    addLift: (lift) => {},
    clearLift: () => {},
});

export default liftContext;