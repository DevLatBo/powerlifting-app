import React, {useState} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../UI/Header/Header';
import Information from './Information/Information';
import Details from './Details/Details';

const INFO_MOVS = [
  {
    "id":1,
    "title":"Squat",
    "body":"Piernas",
    "description":"Es un ejercicio, por lo general, dominante de rodilla. Esto quiere decir que la ejecución de la misma depende más de una flexión de rodilla que de una flexión de cadera.",
    "image":"Squat.jpg"
  },
  {
    "id":2,
    "title":"Deadlift",
    "body":"Espalda/Lumbar",
    "description":"Es un gran ejercicio para trabajar las piernas y glúteos al completo además de otros grupos musculares como el abdomen, espalda baja e incluso brazos. Se levanta la barra desde el suelo hasta la cintura.",
    "image":"Deadlift.jpg"
  },
  {
    "id":3,
    "title":"Bench Press",
    "body":"Pectoral",
    "description":"Es un ejercicio compuesto que entrena los pectorales (músculos del pecho), los tríceps y los deltoides frontales (hombros). Es un gran potenciador de la masa muscular de la parte superior del cuerpo, e incluso un importante ejercicio para las mujeres que quieran entrenar su fuerza de empuje.",
    "image":"BenchPress.jpg"
  }
];
const About = (props) => {
  const [movements, setMovements] = useState(INFO_MOVS);
  return(
      <Aux>
        <Header/>
        <Information/>
        <Details movs = {movements}/>
      </Aux>
  );
};

export default About;