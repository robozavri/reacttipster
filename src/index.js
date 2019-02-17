import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app';
import Home from './pages/home';
import Registration from './pages/registration';
import Profile from './pages/profile';
import Login from './pages/login';

const title = 'My Minimal React Webpack Babel Setup wow';
// alert('wow works');

const routing = (
  <Router>
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/app" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/Registration" component={Registration} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Login" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('app')
);

/*
<Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/app" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/Registration" component={Registration} />
    </div>
  </Router>
*/