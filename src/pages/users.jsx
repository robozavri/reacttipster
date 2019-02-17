import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Footer from '../components/footer';
import CenterBanner from '../components/centerBanner';

 export default class Users extends React.Component {
  
      constructor(props) {
        super(props);
        document.getElementById('app').style.cssText = "background-image:url('assets/img/top_bg.png'); background-size: 100% auto; background-repeat:no-repeat;";
    }
     
      render() {
        return (
<div>
	<Menu/>

	<div  className="MainContainer">
		<div  className="container padding_0">
			
			<div  className="leftDiv">
				<LeftSidebar/>
			</div>
			
		<div className="ContentDiv">
			<div className="Content">
				<div className="AllUsersPage">
					<div className="Head">
						<div className="row">
							<div className="col-sm-7">
								<div className="Title"><span>All Users</span></div>
							</div>						
							<div className="col-sm-5">
								<div className="UserSearchDiv">
									<input type="text" placeholder="Search User"/>
									<button><i className="fa fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="UsersDiv">
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
						<div className="col-sm-4">
							<a href="user_profile.html" className="Item">
							    <div className="Image"><img src="assets/img/user_1.jpg"/></div>
						    	<div className="Info">
								    <div className="Title">Edgar Fox</div>
								    <div className="Static">100% (8 Games)</div>
								    <i className="fa fa-angle-right"></i>
 								</div>
							</a>
						</div>
					</div>
				</div>

				<CenterBanner/>
				
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