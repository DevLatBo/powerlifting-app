import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import useHttp from '../../hooks/use-http';
import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';
import Spinner from '../UI/Loader/Loader';
import BoxMessage from '../UI/BoxMessage/BoxMessage';
import Section from '../UI/Section/Section';

const StyledGrid = styled(Grid)`
    margin: 20px 0px;
`;

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

    const errorMessage = <BoxMessage type="error"
                        className="error">
                            {error}
                        </BoxMessage>
    

    const prs = movements.map((movement) => {
        return <PersonalRecordItem key={movement.id} 
                id={movement.id}
                movement={movement.name}/>
    });

    return (
        <Section>
            <h2>Personal Records</h2>
            <StyledGrid container 
                direction="row"
                justifycontent="center"
                alignItems="center"
                sx={{display:"inline-flex"}}>
                    {!isLoading && !error && prs}
                    {isLoading && loader}
                    {!isLoading && error && errorMessage}
            </StyledGrid>
            <LastRecords/>
        </Section>
    );
}

export default PersonalRecords;