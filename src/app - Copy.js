import React from 'react';
import ReactDOM from 'react-dom';

 export default class App extends React.Component {
  
      constructor(props) {
        super(props);
        this.state = {
          
        };
    }
     
      render() {
        return (
<div>
            <div className="modal fade TipsterModal" id="AddTipPopup" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-body">
            	<div className="ModalTitle">Add Tip and Comment</div>
                <div className="row">
                	<div className="ModalTable">
                		<table>
						    <thead>
						        <tr>
                                    <th>Date</th>
						            <th>Game</th>
						            <th>Result</th>
						            <th>ODDS</th>
						        </tr>
						    </thead>
						    <tbody>
						        <tr>
						            <td className="Uppercase">Today 23:30</td> 
						            <td className="Bold">Sevilia - Viliareal</td> 
						            <td>1</td> 
						            <td>2.80</td>  
						        </tr>
					        </tbody>
				        </table> 
                	</div>
                </div>
                <div className="col-sm-12">
            		<div className="ModalCommentForm">
                		<div className="form-group">
                			<textarea placeholder="Leave your comment why you think this result , if you want"></textarea>
                		</div>
                	</div>
        		</div>
        		<div className="col-sm-4">
        			<button className="Button btn-block">add tip</button>
        		</div>
        		<div className="col-sm-2 padding_0">
        			<button className="ButtonWhite btn-block">cancel</button>
        		</div>
            </div>
        </div>
    </div>
</div>


<div className="HeaderDiv">
<div className="HeaderDiv">
	<div className="container">
		<div className="row">
			<div className="col-sm-2">
				<a href="index.html" className="LogoDiv"></a>
			</div>	
			<div className="col-sm-6">
				<div className="MainMenu">
					<ul>
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
					<a href="login.html" className="Button_2">add tip</a>
				</div>
			</div>
		</div>
	</div>
</div>





<div className="MainContainer">
	<div className="container padding_0">
	
		<div className="leftDiv">
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
					<a href="edit_profile.html" className="ProfileButton rounded">Edit Profile</a>
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
		</div><div className="ContentDiv TopPosition">
			<div className="Content">
				<ul className="TipsterTab">
					<li><a href="#StatisticsTab" data-toggle="tab"><span></span>Statistics</a></li>
					<li className="active"><a href="#MessageTabs" data-toggle="tab"><span></span>Message</a></li>
				</ul>
          <div className="tab-content"><div role="tabpanel" className="tab-pane" id="StatisticsTab">
						<div className="StatisticDiv">
							<div className="row">
								<div className="col-sm-4">
									<div className="Item">
										<span>number of picks</span>
										<label>0</label>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="Item active">
										<span>won</span>
										<label>0</label>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="Item">
										<span>lost</span>
										<label>0</label>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="Item">
										<span>% won</span>
										<label>100</label>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="Item">
										<span>average odd</span>
										<label>15.4</label>
									</div>
								</div>
							</div>
						</div>
						<div className="TipsterTable">
							<div className="Title"><span>PICKS Giorgi barca:</span></div>
							<table>
							    <thead>
							        <tr>
							            <th>username</th>
							            <th>sport</th>
							            <th>match name</th>
							            <th>pick</th>
							            <th>0dd</th>
							            <th>date</th>
							            <th>result</th>
							        </tr>
							    </thead>
							    <tbody>
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Win">2-0</td> 
							        </tr> 
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Lose">2-0</td> 
							        </tr>   
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Win">2-0</td> 
							        </tr> 
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Lose">2-0</td> 
							        </tr> 
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Win">2-0</td> 
							        </tr> 
							        <tr>
							            <td className="Uppercase">gio777</td> 
							            <td>Football</td> 
							            <td className="Bold">SHC Fassa - Vipiteno</td> 
							            <td>> 2.5</td> 
							            <td>1.45</td> 
							            <td>26.5.2018 23:30</td> 
							            <td className="Bold Win">2-0</td> 
							        </tr> 
							    </tbody>
							</table>
						</div>
					</div><div role="tabpanel" className="tab-pane active" id="MessageTabs">
						<div className="MessagesDiv">
							<div className="Head">
								<div className="row">
									<div className="col-sm-6"><div className="Title">messages</div></div>
									<div className="col-sm-6">
										<div className="SmallSelect">
											<div className="dropdown">
											    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											        action <i className="fa fa-angle-down"></i>
											    </button>
											    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											        <a className="dropdown-item" href="#">1</a>
											        <a className="dropdown-item" href="#">2</a> 
											    </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
							<a href="chat.html" className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</a>
						</div>
					</div>
				
				</div>
			</div>
		</div>	<div className="RightDiv">
			<div className="Content">
				<div className="RightMyTip">
					<div className="Head">
						my tip
					</div>
					<div className="MyTipDiv">
						<div className="Item">
							<div className="Remove"></div>
							<div className="Name">Manchester Utd - Tottenham</div>
							<div className="Result">
								<span>Result</span>
								<label>1</label>
							</div>
							<div className="Odds">
								<span>ODDS</span>
								<label>2.80</label>
							</div>							
							<div className="CommentIcon" data-toggle="modal" data-target="#AddTipPopup"></div>
						</div>
						<div className="Item">
							<div className="Remove"></div>
							<div className="Name">Manchester Utd - Tottenham</div>
							<div className="Result">
								<span>Result</span>
								<label>1</label>
							</div>
							<div className="Odds">
								<span>ODDS</span>
								<label>2.80</label>
							</div>
							<div className="CommentIcon" data-toggle="modal" data-target="#AddTipPopup"></div>
						</div>
						<div className="AddTipButton">
							<button className="Button btn-block">add tip</button>
						</div>
					</div>
				</div>
			</div>
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
		</div>
		
	</div>
</div><div className="Footer">
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
</div>
</div>
          );
    }
 }