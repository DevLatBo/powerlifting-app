import {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import Spinner from '../../UI/Loader/Loader';
import BoxMessage from '../../UI/BoxMessage/BoxMessage';

const DetailsContainer = styled.div`
    margin-top: 140px;
    background-color: #F7F7F7;
    & .title {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    & .title h2 {
        font-size: 2.25rem;
        font-weight: 600;
        color: #1E1E1E;
    }
    & .title em {
        font-style: normal;
        color: #FF0000;
    }
    & .title span {
        display: block;
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 1rem;
        color: #666;
        letter-spacing: 0.125rem;
    }
    & .movement {
        margin-bottom: 30px;
    }
    & .movement img {
        width: 90%;
        height: 14rem;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 0 30px;
    }
    @media (max-width: 767px) {
        & .movement {
            margin-bottom: 0px;
        }
    }
    & .movement .definition {
        background-color: #FFF;
        padding: 30px;
    }
    & .movement .definition h3 {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
    }
    & .movement .definition span {
        color: #FF0000;
        font-weight: 600;
        font-size: 0.9rem;
        display: block;
        margin-bottom: 15px;
    }
    & .movement .definition p {
        margin-bottom: 10px;
    }
`;

const Details = (props) => {
    const [movements, setMovements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMovements = async () => {
          const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/movements.json");
          if(!response.ok) {
            throw new Error("Something went wrong!");
          }
          const responseData = await response.json();
      
          let loadedMovements = [];
          for(const key in responseData) {
            loadedMovements.push({
              id: key,
              name: responseData[key].name,
              body: responseData[key].body,
              description: responseData[key].description,
              image: responseData[key].image
            });
          }
          setMovements(loadedMovements);
          setIsLoading(false);
        }
      
        fetchMovements().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    const movementsInfo = movements.map((mov) => {
      return (
        <Grid item md={4} key = {mov.id}>
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

    const loader = <Spinner/>;
    
    const errorMessage = <BoxMessage type="error" 
                            className="error"
                            message={error}/>;

    return (
        <DetailsContainer>
            <Grid container>
                <div className="title">
                    <h2>Movimientos del <em>Powerlifting</em></h2>
                    <span>Existen 3 movimientos dentro de esta disciplina</span>
                </div>
                {!isLoading && !error && movementsInfo}
                {isLoading && loader}
                {error && !isLoading && errorMessage}
            </Grid>
        </DetailsContainer>
    );
}

export default Details;