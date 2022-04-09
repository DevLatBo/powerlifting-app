import Grid from "@material-ui/core/Grid";

const NotFound = (props) => {
    return (
        <Grid container 
            direction="row" 
            justifyContent="center" 
            alignItems="center">
            <Grid item md={6} xs={12}>
                <div className="404-image">
                    <img src={`assets/images/404.png`} alt="404"/>
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className="404-message">
                    <h2>404 Pagina No Encontrada</h2>
                    <p>La pagina que estas intentando ingresar no existe, 
                    favor revisar la URL para poder acceder a la pagina que buscas.</p>
                </div>
            </Grid>
        </Grid>
    );
};

export default NotFound;