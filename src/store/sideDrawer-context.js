import React from 'react';

const sideDrawerContext = React.createContext({
    drawerOpen: false,
    openSideDrawer: () => {},
    closeSideDrawer: () => {},
});

export default sideDrawerContext;
