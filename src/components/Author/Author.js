import { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";

import Title from '../UI/Title/Title';
import { GridStyled } from '../UI/Styling/Section/Author-styling';
import Photo from './Photo/Photo';
import Description from './Description/Description';
import Images from './Description/Images/Images';

const Author = (props) => {

    const images = [
        {
            'name': 'Magento',
            'path': 'assets/images/magento.png'
        },
        {
            'name': 'React',
            'path': 'assets/images/react-js.png'
        },
    ]
    
    return (
        <Fragment>
            <Title 
                mainTitle="Autor"
                description="Ing. Oscar Rolando Gamboa Acho"
            />
            <GridStyled container 
                direction="row" 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid item md={6} xs={12}>
                    <Photo image="assets/images/Author.jpg" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Description/>
                    <Images files={images} />
                </Grid>
            </GridStyled>
        </Fragment>
    );
};

export default Author;