import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { connect } from "react-redux";

import { CHANGE_LANGUAGE } from '../actions/types';


 class Menu extends React.Component {
  
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
						<li><Link to="/Users">Tipsters</Link></li>
						<li><a href="#">Gifts</a></li>
						<li><Link to="/About">About us</Link></li>
						<li><Link to="/ContactUs">Contact us</Link></li>
						<li><Link to="/Instruction">Instruction</Link></li>
						<li><Link to="/Profile">Profile</Link></li>
						<li><Link to="/Chat">chat</Link></li>
						<li><Link to="/AddTips">Add Tips</Link></li>
					</ul>
				</div>
			</div>
			<div className="col-sm-4 text-right">
				<div className="HeadRight">
					<div className="LanguageDiv">
						<div className="dropdown">
						    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						       { this.props.language } <i className="fa fa-angle-down"></i>
						    </button>
						    <div  className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						        <a datalang={
                                    (function(lang) {
                                        switch(lang){
                                               case 'en' : return 'ge';
                                                 break;
                                               case 'ge' :  return 'en';
                                                 break;
                                            default:
                                                return 'ge';
                                        }
                                        console.log(lang);
                                    })(this.props.language)}
                                onClick={ this.props.changelanguage } className="dropdown-item" href="#" >
						        	
						        	 {(function(lang) {
                                        switch(lang){
                                               case 'en' : return 'ge';
                                                 break;
                                               case 'ge' :  return 'en';
                                                 break;
                                            default:
                                                return 'ge';
                                        }
                                        console.log(lang);
                                    })(this.props.language)}
						        </a>
						    </div>
						</div>
					</div>
					<Link className="Button_2" to="/Registration">registration</Link>
					<Link className="ButtonGray MarginRight10" to="/Login">Login</Link>
				</div>
			</div>
		</div>
	</div>
</div>
          );
    }
}

 const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changelanguage: (lang) => {
    	let langcode = lang.target.getAttribute('datalang');
        dispatch({ type: CHANGE_LANGUAGE, payload:  langcode  });    	
    },
  }
}

 const mapStateToProps = state => {
 	  const {  user,language, translate  } = state;
      return {
        surename  : user.surename,
        language  : language.language,
        translate : language.translate,
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);