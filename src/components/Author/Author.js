import { Fragment } from 'react';
import Title from '../UI/Title/Title';

import Profile from './Profile/Profile';


const Author = (props) => {
    return (
        <Fragment>
            <Title 
                mainTitle="Autor"
                description="Ing. Oscar Rolando Gamboa Acho"
            />
            <Profile/>
        </Fragment>
    );
};

export default Author;