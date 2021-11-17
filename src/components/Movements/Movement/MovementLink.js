import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';


const MovementLink = (props) => {
    return(
        <Grid xs={12} md={12} className="movGrid" item={true}>
            <Link className="movement"
                to={"movements/"+props.route}>
                    {props.name}
            </Link>
        </Grid>
    );
}

export default MovementLink;