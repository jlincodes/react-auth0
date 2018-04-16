import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={FoodJokes} />
        <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
