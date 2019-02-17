import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import UserInfo from '../components/userinfo';
import Ticket from '../components/ticket';
import Footer from '../components/footer';

 export default class ProfileEdit extends React.Component {
  
      constructor(props) {
        super(props);
        document.getElementById('app').style.cssText = "";
    }
     
      render() {
        return (
<div>

<Menu/>


<div className="MainContainer">
	<div className="container padding_0">
		
		<div className="leftDiv">
			
			<UserInfo />

			<LeftSidebar/>
		</div>
	
		<div className="ContentDiv TopPosition">
			<div className="Content">
				<div className="EditProfile">
					<div className="Head">
						<div className="GoBack"><i className="fa fa-angle-left"></i> <span>go back</span></div>
					</div>
					<div className="Left">
						<div className="ProfileForm">
							<div className="form-group">
								<div className="FormTitle">your avatar</div>
							</div>
							<div className="form-group">
								<div className="FileUploadDiv">
									<div className="YourNameRound">ne</div>
									<label>change your avatar</label>
									<input type="file" title="Upload Avatar"/>
								</div>
							</div>
							<div className="form-group">
								<div className="FormTitle">Edit Your information</div>
							</div>
							<div className="form-group">
								<input type="text" value="ergemla" placeholder="User" />
							</div>
							<div className="form-group">
								<input type="text" value="nikoloz" placeholder="name" />
							</div>
							<div className="form-group">
								<input type="text" value="ergemlidze" placeholder="Last Name" />
							</div>
							<div className="form-group">
								<select className="selectpicker">
									<option>Male</option>
									<option>Female</option>
									<option>Other</option>
								</select>
							</div>
							<div className="form-group">
								<input type="text" value="ergemlidzenikoloz@gmail.com" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="text" value="Georgia" placeholder="Country" />
							</div>
							<div className="form-group">
								<input type="text" value="Tbilisi" placeholder="City" />
							</div>							
							<div className="form-group">
								<input type="text" value="Otar  Lortkifanidze 18" placeholder="Address" />
							</div>
							<div className="form-group">
								<button className="Button disabled">send</button>
							</div>
						</div>
					</div>
					<div className="Right">
						<div className="ChangePassForm">
							<div className="form-group">
								<div className="FormTitle">Update your password</div>
							</div>
							<div className="form-group">
								<input type="text" placeholder="Old Password"/>
							</div>
							<div className="form-group">
								<input type="text" placeholder="New Password" />
							</div>
							<div className="form-group">
								<input type="text" placeholder="Confirm New Password" />
							</div>
							<div className="form-group">
								<button className="Button">send</button>
							</div>
						</div>
					</div>
				</div>				 
			</div>
		</div>
				
		<div className="RightDiv">
		
		 	<Ticket/>
		
			<RightBanner/>

		</div>
			
	</div>
</div>




<Footer/>


</div>
  );
    }
 }