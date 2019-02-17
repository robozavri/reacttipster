import React from 'react';
import ReactDOM from 'react-dom';

 export default class Footer extends React.Component {
  
      constructor(props) {
        super(props);
      
    }
     
      render() {
        return (
<div className="Footer">
	<div className="container">
		<div className="row">
			<div className="col-sm-3">
				<a href="#" className="FooterLogo"></a>
			</div>
			<div className="col-sm-3">
				<div className="FooterMenu">
					<div className="Title">main</div>
					<li><a href="#">Home Page</a></li>
					<li><a href="#">Sign In</a></li>
					<li><a href="#">Sign Up</a></li>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="FooterMenu">
					<div className="Title">information</div>
					<li><a href="#">Information</a></li>
					<li><a href="#">About us</a></li>
					<li><a href="#">Instruction</a></li>
					<li><a href="#">Site Rules</a></li>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="FooterMenu">
					<div className="Title">get in touch</div>
					<li><a href="#">Contact us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">Instruction</a></li>
					<li><a href="#">Site Rules</a></li>
				</div>
				<div className="FooterSocial">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
    );
    }
}