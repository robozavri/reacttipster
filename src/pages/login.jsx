import React from 'react';
import ReactDOM from 'react-dom';

 export default class Login extends React.Component {
  
      constructor(props) {
        super(props);
      
    }
     
      render() {
        return (
<div  className="HeaderDiv">
	<div  className="container">
		<div  className="row">
			<div  className="col-sm-2">
				<a href="index.html"  className="LogoDiv"></a>
			</div>	
			<div  className="col-sm-6">
				<div  className="MainMenu">
					<ul>
						<li><a href="#">Tipsters</a></li>
						<li><a href="#">Gifts</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Contact us</a></li>
						<li><a href="#">Instruction</a></li>
					</ul>
				</div>
			</div>
			<div  className="col-sm-4 text-right">
				<div  className="HeadRight">
					<div  className="LanguageDiv">
						<div  className="dropdown">
						    <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						        eng <i  className="fa fa-angle-down"></i>
						    </button>
						    <div  className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						        <a  className="dropdown-item" href="#">geo</a>
						        <a  className="dropdown-item" href="#">rus</a> 
						    </div>
						</div>
					</div>
					<a href="login.html"  className="Button_2">add tip</a>
				</div>
			</div>
		</div>
	</div>
</div>





<div  className="MainContainer">
	<div  className="container padding_0">
		
		<div  className="leftDiv">
			<div  className="Content">
				<div  className="LeftHead">
					<div  className="Icon"><i  className="fa fa-percent"></i></div>
					<div  className="Title">Efficiency 100%</div>
				</div>
				<div  className="UserList">
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<div  className="ButtonPadding">
						<div  className="SHowMoreButton" data-toggle="modal" data-target="#MoreUsersModal">show more</div>
					</div>
				</div>
				<div  className="LeftHead">
					<div  className="Icon"><i  className="fa fa-percent"></i></div>
					<div  className="Title">Efficiency from 10 to 20</div>
				</div>	
				<div  className="UserList">
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<a href="user_profile.html"  className="Item">
						<div  className="Image"><img src="assets/img/user_1.jpg"/></div>
						<div  className="Info">
							<div  className="Title">Edgar Fox</div>
							<div  className="Static">100% (8 Games)</div>
							<div  className="Number">1</div>
						</div>
					</a>
					<div  className="ButtonPadding">
						<div  className="SHowMoreButton" data-toggle="modal" data-target="#MoreUsersModal">show more</div>
					</div>
				</div>			
			</div>
		</div>
		
		<div  className="ContentDiv">
			<div  className="Content">
				<div  className="LoginForm">
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
					</div>
					<div  className="col-sm-3"></div>
				</div>
			</div>
		</div>
		
		<div  className="RightDiv">
			<div  className="Content">
				<div  className="AdverstimentDiv">
					<div  className="Title">adverstiment</div>
					<div  className="BannersDiv">
						<a href="#"><img src="assets/img/banner_1.jpg"/></a>
						<a href="#"><img src="assets/img/banner_2.jpg"/></a>
						<a href="#"><img src="assets/img/banner_3.jpg"/></a>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</div>




<div  className="Footer">
	<div  className="container">
		<div  className="row">
			<div  className="col-sm-3">
				<a href="#"  className="FooterLogo"></a>
			</div>
			<div  className="col-sm-3">
				<div  className="FooterMenu">
					<div  className="Title">main</div>
					<li><a href="#">Home Page</a></li>
					<li><a href="#">Sign In</a></li>
					<li><a href="#">Sign Up</a></li>
				</div>
			</div>
			<div  className="col-sm-3">
				<div  className="FooterMenu">
					<div  className="Title">information</div>
					<li><a href="#">Information</a></li>
					<li><a href="#">About us</a></li>
					<li><a href="#">Instruction</a></li>
					<li><a href="#">Site Rules</a></li>
				</div>
			</div>
			<div  className="col-sm-3">
				<div  className="FooterMenu">
					<div  className="Title">get in touch</div>
					<li><a href="#">Contact us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">Instruction</a></li>
					<li><a href="#">Site Rules</a></li>
				</div>
				<div  className="FooterSocial">
					<a href="#"><i  className="fa fa-facebook"></i></a>
					<a href="#"><i  className="fa fa-twitter"></i></a>
					<a href="#"><i  className="fa fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
 );
    }
}