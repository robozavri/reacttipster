import React from 'react';
import ReactDOM from 'react-dom';

 export default class Add extends React.Component {
  
      constructor(props) {
        super(props);
        this.state = {
          
        };
         this.sport.bind(this);
    }
     
     sport(e){
         console.log(e.target.attributes.href);
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
        			<button className="ButtonWhite btn-block" data-dismiss="modal">cancel</button>
        		</div>
            </div>
        </div>
    </div>
</div>


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
					<a href="#" className="AuthorizedDiv"> 
						<span>ne</span>
						<label>account</label> 
					</a>
					<div className="Notifications">
						<i className="fa fa-bell" aria-hidden="true"></i>
						<span>8</span>
					</div>
					<a href="#" className="Button_2">add tips</a>
				</div>
			</div>
		</div>
	</div>
</div>





<div className="MainContainer">
	<div className="container padding_0">
	
		<div className="leftDiv">
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
		</div>
		
		<div className="ContentDiv">
			<div className="Content">
				<ul className="SpeciesTab">
					<li className="active"><a href="#FootballTab" className="FOOTBALL" data-toggle="tab"><span></span>football</a></li>
					<li><a href="#TennisTab" className="TENNIS" data-toggle="tab"><span></span>tennis</a></li>
					<li><a href="#BasketballTab" onClick={ this.sport } className="BASKETBALL" data-toggle="tab"><span></span>basketball</a></li>
					<li><a href="#HockeyTab" className="HOCKEY" data-toggle="tab"><span></span>hockey</a></li>
					<li><a href="#BaseballTab" className="BASEBALL" data-toggle="tab"><span></span>baseball</a></li>
					<li><a href="#RugbyTab" className="RUGBY" data-toggle="tab"><span></span>rugby</a> </li>
				</ul>
				<div className="tab-content">
					
					<div role="tabpanel" className="tab-pane active" id="FootballTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="FOOTBALL"><span></span>football</div>		
								<div className="MatchCount">6 matches</div>						
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_1">
									Soccer / England / PremierLeague
								</div>
								<div className="MatchesTable collapse in" id="Collapse_1">
									<table>
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1X</th>
									            <th>X2</th>
									            <th> {` < 2.5`} </th>
									            <th> >2.5 </th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient active">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									    </tbody>
									</table>
								</div>
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_2">
									Soccer / Spain / LaLiga
								</div>
								<div className="MatchesTable collapse in" id="Collapse_2">
									<table>
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1X</th>
									            <th>X2</th>
									            <th>{`<2.5`}</th>
									            <th>>2.5</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient active">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									    </tbody>
									</table>
								</div>
							</div>
							<div className="Championship">
								<div className="ChampName collapsed" data-toggle="collapse" data-target="#Collapse_3">
									GEORGIA - EROVNULI LIGA
								</div>
								<div className="MatchesTable collapse" id="Collapse_3">
									<table>
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1X</th>
									            <th>X2</th>
									            <th>{`<2.5`}</th>
									            <th>>2.5</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient active">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Manchester Utd - Tottenham</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient">1.39</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				
					<div role="tabpanel" className="tab-pane" id="TennisTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="TENNIS"><span></span>tennis</div>	
								<div className="MatchCount">1 matches</div>										
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_4">
									Tennis / ATP / US Open
								</div>
								<div className="MatchesTable collapse in" id="Collapse_4">
									<table className="col5">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th> 
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th> 
									            <th>Over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Albert Ramos Vinolas - Karen Khachanov</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">1.6</td> 
									            <td className="Coefficient ColorBlue">33.5</td> 
									            <td className="Coefficient">1.39</td>  
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Albert Ramos Vinolas - Karen Khachanov</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">1.6</td> 
									            <td className="Coefficient ColorBlue">33.5</td> 
									            <td className="Coefficient">1.39</td>  
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Albert Ramos Vinolas - Karen Khachanov</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">1.6</td> 
									            <td className="Coefficient ColorBlue">33.5</td> 
									            <td className="Coefficient">1.39</td>  
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Albert Ramos Vinolas - Karen Khachanov</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">1.6</td> 
									            <td className="Coefficient ColorBlue">33.5</td> 
									            <td className="Coefficient">1.39</td>  
									        </tr>   
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				
					<div role="tabpanel" className="tab-pane" id="BasketballTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="BASKETBALL"><span></span>basketball</div>	
								<div className="MatchCount">1 matches</div>										
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_5">
									Basketball / USA / WNBA / Playoff
								</div>
								<div className="MatchesTable collapse in" id="Collapse_5">
									<table className="col9">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1</th>
									            <th className="ColorBlue">Handicap</th>
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th>
									            <th>over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Atlanta W - Washington W</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+1.5/-1.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">101.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Atlanta W - Washington W</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+1.5/-1.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">101.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>	
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Atlanta W - Washington W</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+1.5/-1.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">101.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>	
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Atlanta W - Washington W</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+1.5/-1.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">101.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>	
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Atlanta W - Washington W</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+1.5/-1.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">101.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>										         
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				
					<div role="tabpanel" className="tab-pane " id="HockeyTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="HOCKEY"><span></span>hockey</div>	
								<div className="MatchCount">1 matches</div>										
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_6">
									Ice Hockey / Russia / KHL
								</div>
								<div className="MatchesTable collapse in" id="Collapse_6">
									<table className="col9">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1</th>
									            <th className="ColorBlue">Handicap</th>
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th>
									            <th>over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">AK Bars - Ska</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">AK Bars - Ska</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">AK Bars - Ska</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">AK Bars - Ska</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">AK Bars - Ska</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>									         
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				
					<div role="tabpanel" className="tab-pane" id="BaseballTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="BASEBALL"><span></span>baseball</div>	
								<div className="MatchCount">1 matches</div>										
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_7">
									Baseball / USA / MLB
								</div>
								<div className="MatchesTable collapse in" id="Collapse_7">
									<table className="col9">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1</th>
									            <th className="ColorBlue">Handicap</th>
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th>
									            <th>over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">1.86</td> 
									            <td className="Coefficient ColorBlue">5.5</td> 
									            <td className="Coefficient">1.86</td> 
									        </tr>  									         
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				
					<div role="tabpanel" className="tab-pane" id="RugbyTab">
						<div className="AllMatchesDiv">
							<div className="Head">
								<div className="RUGBY"><span></span>rugby</div>	
								<div className="MatchCount">1 matches</div>										
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_8">
									Rugby / Rugby Union / English Premiership
								</div>
								<div className="MatchesTable collapse in" id="Collapse_8">
									<table className="col9">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1</th>
									            <th className="ColorBlue">Handicap</th>
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th>
									            <th>over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>									         
									    </tbody>
									</table>
								</div>
							</div>
							<div className="Championship">
								<div className="ChampName " data-toggle="collapse" data-target="#Collapse_9">
									Rugby / Rugby Union / English Premiership
								</div>
								<div className="MatchesTable collapse in" id="Collapse_9">
									<table className="col9">
									    <thead>
									        <tr>
									            <th>Time</th>
									            <th>Pairs</th>
									            <th>1</th>
									            <th>X</th>
									            <th>2</th>
									            <th>1</th>
									            <th className="ColorBlue">Handicap</th>
									            <th>2</th>
									            <th>Under</th>
									            <th className="ColorBlue">Total</th>
									            <th>over</th>
									        </tr>
									    </thead>
									    <tbody>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr> 
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>
									        <tr>
									            <td className="Uppercase">Today 23:30</td> 
									            <td className="Bold">Toronto - Philadelphia</td> 
									            <td className="Coefficient">2.70</td> 
									            <td className="Coefficient">3.20</td> 
									            <td className="Coefficient">2.85</td> 
									            <td className="Coefficient">1.46</td> 
									            <td className="Coefficient ColorBlue">+0.5/-0.5</td> 
									            <td className="Coefficient">1.51</td> 
									            <td className="Coefficient">-</td> 
									            <td className="Coefficient ColorBlue">-</td> 
									            <td className="Coefficient">-</td> 
									        </tr>									         
									    </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
			
		<div className="RightDiv">
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
</div>




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
</div>
);
    }
 }