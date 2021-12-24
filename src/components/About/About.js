import Aux from '../../hoc/Aux/Aux';
import Information from './Information/Information';
import Details from './Details/Details';

const About = (props) => {
  return(
      <Aux>
        <Information/>
        <Details/>
      </Aux>
  );
};

export default About;