import Aux from '../../hoc/Aux/Aux';
import Header from '../UI/Header/Header';
import Information from './Information/Information';
import Details from './Details/Details';

const About = (props) => {
  return(
      <Aux>
        <Header/>
        <Information/>
        <Details/>
      </Aux>
  );
};

export default About;