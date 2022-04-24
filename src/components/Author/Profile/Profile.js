import Grid from "@material-ui/core/Grid";
import { GridStyled } from '../../UI/Styling/Section/Author-styling';

const Profile = (props) => {
    return (
        <GridStyled container 
            direction="row" 
            justifyContent="center" 
            alignItems="center">
            <Grid item md={6} xs={12}>
                <div className="photo-profile">
                    <img src={`assets/images/Author.jpg`} alt="Author"/>
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className="description-profile">
                    <p>
                        Ingeniero de Sistemas, concluí mis estudios en la Universidad Mayor de San Simon en 
                        el año 2015, hice mi proyecto de grado en el 2016 y por consiguiente me titule como profesional. 
                        Trabajé en varias empresas como programador web tanto en frontend como backend con frameworks como 
                        Codeigniter, Laravel y Magento en sus distintas versiones. <br/><br/>
                        Actualmente me desenvuelvo más como Backend Developer en Magento 2.3 y 2.4 y me mantengo en ritmo de aprendizaje con React.js aplicando 
                        diferentes conceptos en su version 16 y/o superior. <br/><br/>

                        También soy fundador de la comunidad DevLat (antes conocida como 05K4R1N) donde comparto mis conocimientos 
                        en fundamentos de programación web y base de datos, actualmente comparto videos sobre Magento 2.3 y 2.4 en temas de 
                        instalación y desarrollo.
                    </p>
                </div>
                <div className="images-profile">
                    <img src={`assets/images/magento.png`} alt="Magento"/>
                    <img src={`assets/images/react-js.png`} alt="React"/>
                </div>
            </Grid>
        </GridStyled>
    )
};

export default Profile;