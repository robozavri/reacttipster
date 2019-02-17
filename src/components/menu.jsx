import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

 export default class Menu extends React.Component {
  
      constructor(props) {
        super(props);
     
    }
     
      render() {
        return (
<div className="HeaderDiv">
	<div className="container">
		<div className="row">
			<div className="col-sm-2">
				<a href="index.html" className="LogoDiv"></a>
			</div>	
			<div className="col-sm-6">
				<div className="MainMenu">
					<ul>

						<li><Link to="/">Home</Link></li>
						<li><Link to="/Registration">Registration</Link></li>
						<li><a href="#">Tipsters</a></li>
						<li><a href="#">Gifts</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Contact us</a></li>
						<li><a href="#">Instruction</a></li>
					</ul>
				</div>
			</div>
			<div className="col-sm-4 text-right">
				<div className="HeadRight">
					<div className="LanguageDiv">
						<div className="dropdown">
						    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						        eng <i className="fa fa-angle-down"></i>
						    </button>
						    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						        <a className="dropdown-item" href="#">geo</a>
						        <a className="dropdown-item" href="#">rus</a> 
						    </div>
						</div>
					</div>
					<a href="registration.html" className="Button_2">registration</a>
					<a href="login.html" className="ButtonGray MarginRight10">login</a>
				</div>
			</div>
		</div>
	</div>
</div>
          );
    }
}