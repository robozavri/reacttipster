import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import * as actions from "../actions/auth-action";
import { compose } from "redux"

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Footer from '../components/footer';



class Login extends React.Component {
  
      constructor(props) {
        super(props);
        document.getElementById('app').style.cssText = "background-image:url('assets/img/top_bg.png'); background-size: 100% auto; background-repeat:no-repeat;";
    }

   //   componentDidMount() {
	  //   if(this.props.auth.loggedIn) {
	  //     this.props.history.push('/')
	  //   }
	  // }
     
      onSubmit(event){
      	event.preventDefault()
      	const data = new FormData(event.target);
      	// console.log(data);
      	// console.log(event.target);
      	// console.log(this.props);
      	// return;
	    this.props.login(data, () => {
	    //   // this.props.history.push('/');
	    });
	  }


      render() {
      	  //const { handleSubmit } = this.props;
        return (
<div>
	<Menu/>

	<div  className="MainContainer">
		<div  className="container padding_0">
			
			<div  className="leftDiv">
				<LeftSidebar/>
			</div>
			
			<div  className="ContentDiv">
					<div  className="LoginForm">
				<div  className="Content">
						<div  className="col-sm-12 padding_0">
							<div  className="TitleText">
								<label>Sign In</label>
								<span>Log in by this form.. if you are registered already.</span>
							</div>
							<div  className="InformationDiv">
								If you have not account <a href="registration.html">go to registration</a>
							</div>
						</div>
						<div  className="col-sm-3"></div>
						<div  className="col-sm-6">	
							<form action="" onSubmit={ this.onSubmit.bind(this) }>					
								<div  className="form-group">
									<input type="text" placeholder="Username"/>
								</div>
								<div  className="form-group">
									<input type="password" placeholder="Password"/>
								</div>	
								<div  className="form-group">
									<button  className="Button">login</button>
									<a href="registration.html"  className="ButtonWhiteBlack">add new account</a>
								</div>
							</form>
						</div>
						<div  className="col-sm-3"></div>
					</div>
				</div>
			</div>
			
			<div  className="RightDiv">
				<RightBanner/>
			</div>
		
		</div>
	</div>
	<Footer/>
</div>
 );
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors.errorsObject
  }
}
export default connect(mapStateToProps, actions)(Login);

// export default compose(
//   connect(mapStateToProps, actions),
// )(Login);