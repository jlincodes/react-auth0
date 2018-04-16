import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Route path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes}/>
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
