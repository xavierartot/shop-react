import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import App from './components/App';
import Storepicker from './components/StorePicker';
import './css/style.css';
import './sample-fishes'; // datas

const NoMatch = () => (
  <h1>No Match 404</h1>
);

const Root = () => (
  <Router>
    <div>
      <Switch>
        {/* <Link to="/">Home</Link>  */}
        <Route path="/" exact component={Storepicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

render(<Root />, document.getElementById('root'));
