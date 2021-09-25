import React, {useContext} from 'react';
import LiftContext from '../../store/lift-context';
const History = (props) => {
  const liftCtx = useContext(LiftContext);
  console.log(liftCtx.lifts);
  return <h1>this is a test</h1>;
}

export default History;