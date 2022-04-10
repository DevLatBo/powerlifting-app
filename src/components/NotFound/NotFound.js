import Grid from "@material-ui/core/Grid";
import { NotFoundImg, NotFoundMsg } from './NotFound-styling';

const NotFound = (props) => {
    return (
        <Grid container 
            direction="row" 
            justifyContent="center" 
            alignItems="center">
            <Grid item md={6} xs={12}>
                <NotFoundImg>
                    <img src={`assets/images/404.png`} alt="404"/>
                </NotFoundImg>
            </Grid>
            <Grid item md={6} xs={12}>
                <NotFoundMsg>
                    <h2>404 Página No Encontrada</h2>
                    <p>La página que estas intentando ingresar no existe, 
                    favor de revisar la URL para poder acceder a la pagina que buscas.</p>
                </NotFoundMsg>
            </Grid>
        </Grid>
    );
};

export default NotFound;