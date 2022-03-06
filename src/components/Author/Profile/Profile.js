import {Fragment} from 'react';
import Grid from '@mui/material/Grid';

const Profile = (props) => {
    return (
        <Fragment>
            <Grid item md={6} xs={12}>
                <img src={`assets/images/Author.jpg`} alt="Author"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <p>
                    Ingeniero de Sistemas, concluí mis estudios en la Universidad Mayor de San Simon en 
                    el año 2015, hice mi proyecto de grado en el 2016 y por consiguiente me titule como profesional. 
                    Trabajé en varias empresas como programador web tanto en frontend como backend con frameworks como 
                    Codeigniter, Laravel y Magento en sus distintas versiones. Actualmente me desenvuelvo más como 
                    Backend Developer en Magento 2.3 y 2.4 y me mantengo en ritmo de aprendizaje con React.js aplicando 
                    diferentes conceptos en su version 16 y/o superior.

                    También soy fundador de la comunidad DevLat (antes conocida como 05K4R1N) donde comparto mis conocimientos 
                    en fundamentos de programación web y base de datos, actualmente comparto videos sobre Magento 2.3 y 2.4 en temas de 
                    instalación y desarrollo.
                </p>
            </Grid>
            <Grid item md={12} xs={12}>
                <img src="" alt="Magento"/>
                <img src="" alt="React"/>
                <img src="" alt="Laravel"/>
            </Grid>
        </Fragment>
    )
};

export default Profile;