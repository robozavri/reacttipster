import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from 'react-router-dom'

 export default class UserInfo extends React.Component {
  
      constructor(props) {
        super(props);
       
    }
     
      render() {
        return (
<div className="ProfileInfo">
				<div className="col-sm-12 text-center">
					<div className="ProfileRound">
						<span>ne</span>
						
						<div className="UserStat Four"></div>
					</div>
				</div>
				<div className="col-sm-12 text-center">
					<div className="Name">nicholas ergemla</div>
				</div>
				<div className="col-sm-12 text-center">
					<Link className="ProfileButton rounded" to="/ProfileEdit">Edit profile</Link>
 				</div>
				<div className="ProfStat">
					<div className="Item Followers">
						<span>2492</span>
						<label>Followers</label>
					</div>
					<div className="Item Following">
						<span>874</span>
						<label>Following</label>
					</div>
				</div>
</div>
    );
    }
}