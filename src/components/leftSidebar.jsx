import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

 export default class LeftSidebar extends React.Component {
  
      constructor(props) {
        super(props);
       
    }
     
      render() {
        return (
<div className="Content">
		<div className="LeftHead">
			<div className="Icon"><i className="fa fa-percent"></i></div>
			<div className="Title">Efficiency 100%</div>
		</div>
		<div className="UserList">
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<div className="ButtonPadding">
				<div className="SHowMoreButton" data-toggle="modal" data-target="#MoreUsersModal">show more</div>
			</div>
		</div>
		<div className="LeftHead">
			<div className="Icon"><i className="fa fa-percent"></i></div>
			<div className="Title">Efficiency from 10 to 20</div>
		</div>	
		<div className="UserList">
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<a href="user_profile.html" className="Item">
				<div className="Image"><img src="assets/img/user_1.jpg"/></div>
				<div className="Info">
					<div className="Title">Edgar Fox</div>
					<div className="Static">100% (8 Games)</div>
					<div className="Number">1</div>
				</div>
			</a>
			<div className="ButtonPadding">
				<div className="SHowMoreButton" data-toggle="modal" data-target="#MoreUsersModal">show more</div>
			</div>
		</div>			
</div>
        );
    }
}