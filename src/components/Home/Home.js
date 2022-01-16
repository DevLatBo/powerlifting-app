import React, {Fragment} from 'react';

import Title from './Title/Title';
import Definition from './Information/Definition';
import Movements from './Information/Movements';



const Home = (props) => {
    return (
        <Fragment>
            <Title/>
            <Definition/>
            <Movements/>
        </Fragment>
    );
}

export default Home;