import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout/Layout';
import Movements from './components/Movements/Movements';
import Movement from './components/Movement/Movement';
import About from './components/About/About';
import History from './components/History/History';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/> 
          <Route path="/history" component={History}/>
          <Route path="/movements" exact component={Movements}/>
          <Route path="/movements/:movement" component={Movement}/>
      </Switch>
  );
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
}

export default App;