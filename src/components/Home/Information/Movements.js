import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import useHttp from '../../../hooks/use-http';
import { StyledMovements } from '../../UI/Block/block-styling';
import Spinner from '../../UI/Loader/Loader';
import BoxMessage from '../../UI/BoxMessage/BoxMessage';

const Movements = (props) => {
    const [movements, setMovements] = useState([]);
    const {isLoading, error, sendRequest: fetchMovements} = useHttp();
    
    useEffect(() => {
        const obtainMovements = (movements) => {
            const loadedMovements = [];
            for(let key in movements) {
                loadedMovements.push({
                    id: key,
                    name: movements[key].name,
                    body: movements[key].body,
                    description: movements[key].description,
                    image: movements[key].image
                });
            }
            setMovements(loadedMovements);
        };
        fetchMovements(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/movements.json"},
            obtainMovements
        );
    }, [fetchMovements]);

    const movementsInfo = movements.map((mov) => {
      return (
        <Grid item md={4} key={mov.id}>
            <div className="movement">
                <img src={`assets/images/${mov.image}`} alt=""/>
                <div className = "definition">
                    <h3>{mov.name}</h3>
                    <span>{mov.body}</span>
                    <p>{mov.description}</p>
                </div>
            </div>
        </Grid> 
      );             
    });

    const loader = <Spinner size="lg"/>;
    
    const errorMessage = <BoxMessage type="error" 
                            className="error">
                            {error}
                        </BoxMessage>;

    return (
        <StyledMovements>
            <Grid container>
                <Grid item md={12} className="title">
                    <h2>Movimientos</h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </Grid>
                {!isLoading && !error && movementsInfo}
                {isLoading && loader}
                {error && !isLoading && errorMessage}
            </Grid>
        </StyledMovements>
    );
}

export default Movements;