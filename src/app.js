import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Registration from './pages/registration';
import Home from './pages/home';
// import Add from './add';
export default class App extends React.Component {
  
      constructor(props) {
        super(props);
        this.state = {
          
        };
    }
     
      render() {
        return (
        <p>es aris app</p>
          );
    }
 }
 /*
	<Router>
		      <Route path="/" component={Home} />
		      <Route path="/s" component={Home} />
		      <Route path="/Registration" component={Registration} />
		    </Router>
 */