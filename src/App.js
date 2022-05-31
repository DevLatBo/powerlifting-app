import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout/Layout';
import Movements from './components/Movements/Movements';
import MovementItem from './components/Movements/Movement/MovementItemForm/MovementItem';
import PersonalRecords from './components/PersonalRecords/PersonalRecords';
import Author from './components/Author/Author';
import NotFound from './components/NotFound/NotFound';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/personalrecord" component={PersonalRecords}/>
          <Route path="/movements" exact component={Movements}/>
          <Route path="/movements/:movement" component={MovementItem}/>
          <Route path="/author" component={Author}/>
          <Route component={NotFound}/>
      </Switch>
  );
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
}

export default App;