import React, {Fragment} from 'react';

import Title from './Title';
import Definition from './Definition';
import Movements from './Movements';
import Target from './Target';


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