import React, {Fragment} from 'react';

import Title from './Title/Title';
import Definition from './Information/Definition';
import Movements from './Information/Movements';
import Target from './Information/Target';


const Home = (props) => {
    return (
        <Fragment>
            <Title/>
            <Definition/>
            <Target/>
            <Movements/>
        </Fragment>
    );
}

export default Home;