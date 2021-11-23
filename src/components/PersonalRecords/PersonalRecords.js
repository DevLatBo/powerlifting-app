import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import PersonalRecordItem from './PersonalRecordItem/PersonalRecordItem';
import LastRecords from './LastRecords/LastRecords';
import Spinner from '../UI/Loader/Loader';
import BoxMessage from '../UI/BoxMessage/BoxMessage';

const StyledGrid = styled(Grid)`
    margin: 20px 0px;
`;

const PersonalRecords = (props) => {
    const [movements, setMovements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMovements = async() => {
            const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/movements.json");
            if(!response.ok) {
                throw new Error("Something wrong happened!");
            }
            const responseData = await response.json();
    
            let loadedMovements = [];
            for(let key in responseData) {
                loadedMovements.push({
                    id: key,
                    name: responseData[key].name,
                });
            }
            setMovements(loadedMovements);
            setIsLoading(false);
        }
        fetchMovements().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    }, [])

    const loader = <Spinner/>;

    const errorMessage = <BoxMessage type="error" 
                        message={error}
                        className="error"/>
    

    const prs = movements.map((movement) => {
        return <PersonalRecordItem key={movement.id} 
                id={movement.id}
                movement={movement.name}/>
    });

    return (
        <div>
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
        </div>
    );
}

export default PersonalRecords;