import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app';
import Home from './pages/home';
import Registration from './pages/registration';
import Profile from './pages/profile';
import ProfileEdit from './pages/profileEdit';
import Login from './pages/login';
import Instruction from './pages/instruction';
import About from './pages/about';
import ContactUs from './pages/contact';
import Chat from './pages/chat';
import Users from './pages/users';
import AddTips from './pages/addTips';

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
      <Route path="/ProfileEdit" component={ProfileEdit} />
      <Route path="/Login" component={Login} />
      <Route path="/Instruction" component={Instruction} />
      <Route path="/About" component={About} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Users" component={Users} />
      <Route path="/AddTips" component={AddTips} />
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