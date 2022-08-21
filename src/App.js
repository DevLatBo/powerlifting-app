import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Loader/Loader';

const Home = React.lazy(() => import('./components/Home/Home'));
const History = React.lazy(() => import('./components/History/History'));
const PersonalRecords = React.lazy(() => import('./components/PersonalRecords/PersonalRecords'));
const Movements = React.lazy(() => import('./components/Movements/Movements'));
const MovementItem = React.lazy(() => import('./components/Movements/Movement/MovementItemForm/MovementItem'));
const Author = React.lazy(() => import('./components/Author/Author'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/history" component={History}/>
          <Route path="/personalrecord" component={PersonalRecords}/>
          <Route path="/movements" exact component={Movements}/>
          <Route path="/movements/:movement" component={MovementItem}/>
          <Route path="/movements/:movement/:id" component={MovementItem} />
          <Route path="/author" component={Author}/>
          <Route component={NotFound}/>
      </Switch>
  );
  return (
    <Layout>
      <Suspense fallback={<Spinner size="lg"/>}>{routes}</Suspense>
    </Layout>
  );
}

export default App;