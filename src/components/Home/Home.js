import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Title from './Title/Title';
import Definition from './Information/Definition';
import Movements from './Information/Movements';



const Home = (props) => {
    return (
        <Aux>
            <Title/>
            <Definition/>
            <Movements/>
        </Aux>
    );
}

export default Home;