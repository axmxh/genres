import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Genres from './Genres';
import Artists from './Artists';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Genres} />
          <Route path='/:id/artists' component={Artists} />
          <Route component={() => '404'} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
