import {useState, useEffect} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../UI/Header/Header';
import Information from './Information/Information';
import Details from './Details/Details';

const About = (props) => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      const response = await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/movements.json");
      if(!response.ok) {
        throw new Error("Something went wrong");
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
    }
  
    fetchMovements().catch((error) => {
      console.log(error.message);
    });
  }, []);
  

  return(
      <Aux>
        <Header/>
        <Information/>
        <Details movs={movements} />
      </Aux>
  );
};

export default About;