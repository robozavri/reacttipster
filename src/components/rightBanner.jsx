import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

 export default class RightBanner extends React.Component {
  
      constructor(props) {
        super(props);
        
    }
     
      render() {
        return (
		<div className="Content">
        <div className="AdverstimentDiv">
          <div className="Title">adverstiment</div>
          <div className="BannersDiv">
            <a href="#"><img src="assets/img/banner_1.jpg"/></a>
            <a href="#"><img src="assets/img/banner_2.jpg"/></a>
            <a href="#"><img src="assets/img/banner_3.jpg"/></a>
          </div>
        </div>
      </div>
      );
    }
}