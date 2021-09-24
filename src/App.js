import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout/Layout';
import Movements from './components/Movements/Movements';
import MovementItem from './components/Movements/MovementItem/MovementItem';
import About from './components/About/About';
import History from './components/History/History';
import LiftProvider from './store/LiftProvider';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/> 
          <Route path="/history" component={History}/>
          <Route path="/movements" exact component={Movements}/>
          <Route path="/movements/:movement" component={MovementItem}/>
      </Switch>
  );
  return (
    <LiftProvider>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </LiftProvider>
  );
}

export default App;