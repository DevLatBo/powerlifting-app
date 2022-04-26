import {useState, useEffect, Fragment} from 'react';
import Grid from '@mui/material/Grid';

import useHttp from '../../hooks/use-http';
import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import { StyledTitlePage, StyledBlock } from '../UI/Styling/General-styling';


const PersonalRecords = (props) => {
    const [movements, setMovements] = useState([]);
    const { isLoading, error, sendRequest: fetchMovements } = useHttp(); 

    useEffect(() => {
        const obtainMovements = (movements) => {
            const loadedMovements = [];
            for(let key in movements) {
                loadedMovements.push({
                    id: key,
                    name: movements[key].name,
                });
            }
            setMovements(loadedMovements);
        }
        fetchMovements(
            {url: "https://powerlifting-react-default-rtdb.firebaseio.com/movements.json"},
            obtainMovements
        );
    }, [fetchMovements])

    const loader = <Spinner size="lg"/>;

    const errorMessage = <Alert type="error"
                        className="error">
                            {error}
                        </Alert>
    

    const prs = movements.map((movement) => {
        return <PersonalRecordItem key={movement.id} 
                id={movement.id}
                movement={movement.name}/>
    });

    return (
        <Fragment>
            <StyledTitlePage type="title-page" imageBackground={`/assets/images/title-background.jpg`}>
                <h2>Records Personales</h2>
                <h3>PR & Historial</h3>
            </StyledTitlePage>
            <StyledBlock>
                <Grid container 
                    direction="row"
                    justifycontent="center"
                    alignItems="center"
                    sx={{display:"inline-flex"}}>
                        {!isLoading && !error && prs}
                        {isLoading && loader}
                        {!isLoading && error && errorMessage}
                </Grid>
            </StyledBlock>
            <StyledBlock>
                <LastRecords/>
            </StyledBlock>
        </Fragment>
    );
}

export default PersonalRecords;
