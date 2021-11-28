import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";

import useHttp from '../../hooks/use-http';
import MovementLink from './Movement/MovementLink';
import Spinner from '../UI/Loader/Loader';
import BoxMessage from '../UI/BoxMessage/BoxMessage';

const MovOptions = styled(Grid)`
    margin-top: 20px;
`;

const Movements = (props) => {
    const [movements, setMovements] = useState([]);
    /*const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();*/
    const { isLoading, error, sendRequest: fetchMovements } = useHttp();

    useEffect(() => {
        const obtainMovements = (movements) => {
            const loadedMovements = [];
            for(let key in movements){
                loadedMovements.push({
                    id: key,
                    name: movements[key].name
                });
            }
            setMovements(loadedMovements);
        }

        fetchMovements(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/movements.json"}, 
            obtainMovements
        );
        /*const fetchMovements = async () => {
            const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/movements.json");
            if(!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            const loadedMovements = [];

            for(const key in responseData) {
                loadedMovements.push({
                    id: key,
                    name: responseData[key].name
                });
            }
            setMovements(loadedMovements);
            setIsLoading(false);
        }
        fetchMovements().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });*/
    },[fetchMovements]);
    
    const movementLinks = movements.map((movement) => {
        return (
            <MovementLink
                key={movement.id}
                route={movement.id}
                name={movement.name}/>
        );
    });

    const loader = <Spinner size="lg"/>
        
    const errorMessage = <BoxMessage type="error" 
        className="error"
        message={error}/>;

    return (
        <MovOptions container 
            direction="row"
            justifyContent="center"
            alignItems="center">
                {!isLoading && !error && movementLinks}
                {isLoading && loader}
                {!isLoading && error && errorMessage}
        </MovOptions>
    );
}

export default Movements;