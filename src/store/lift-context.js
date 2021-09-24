import React from 'react';

const liftContext = React.createContext({
    lifts: [],
    addLift: (lift) => {},
});

export default liftContext;