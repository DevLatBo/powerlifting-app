import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { StyledHome } from '../UI/Styling/Section/Home-styling';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { fetchMovementsData } from '../../store/mov-actions';
import { useSelector, useDispatch } from 'react-redux';

const Movements = (props) => {
    const dispatch = useDispatch();
    //const [movements, setMovements] = useState([]);
    //const {isLoading, error, sendRequest: fetchMovements} = useHttp();
    const movements = useSelector((state) => state.mov.movements);
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    
    useEffect(() => {
        dispatch(fetchMovementsData());
    }, [dispatch]);

    const movementsInfo = movements.map((mov) => {
      return (
        <Grid item md={4} key={mov.id} className="movements">
            <img src={`assets/images/${mov.image}`} 
                className="img-mov"
                alt=""/>
            <div className = "definition">
                <h3>{mov.name}</h3>
                <span>{mov.body}</span>
                <p>{mov.description}</p>
            </div>
        </Grid> 
      );             
    });

    const loader = isLoading && <Spinner size="lg"/>;
    
    const errorMessage = alertMessage && <Alert type={alertMessage.type} 
                            className={alertMessage.class}>
                            {alertMessage.error}
                        </Alert>;
    console.log(isLoading);
    return (
        <StyledHome 
            backgroundColor="#FFFFFF"
            fontColor="#000000">
            <Grid container>
                <Grid item 
                    md={12} 
                    className="mov-title">
                    <h2>Movimientos</h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </Grid>
                {/*!isLoading && !error && movementsInfo}
                {isLoading && loader}
                {error && !isLoading && errorMessage*/}
                {movementsInfo}
                {loader}
                {errorMessage}
            </Grid>
        </StyledHome>
    );
}

export default Movements;