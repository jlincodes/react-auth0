import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Route path="/" component={FoodJokes} />
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
