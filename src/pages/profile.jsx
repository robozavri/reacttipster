import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import UserInfo from '../components/userinfo';
import Ticket from '../components/ticket';
import Footer from '../components/footer';

 export default class Profile extends React.Component {
  
      constructor(props) {
        super(props);
   
       // document.getElementById('app').style.cssText = "background-image:url('assets/img/top_bg.png'); background-size: 100% auto; background-repeat:no-repeat;";
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
				<ul className="TipsterTab">
					<li><a href="#StatisticsTab" data-toggle="tab"><span></span>Statistics</a></li>
					<li className="active"><a href="#MessageTabs" data-toggle="tab"><span></span>Message</a></li>
				</ul>
				<div className="tab-content">					 
				
					<div role="tabpanel" className="tab-pane" id="StatisticsTab">
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
					</div>
					
					<div role="tabpanel" className="tab-pane active" id="MessageTabs">
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
						
							<div className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check1" className="styled" type="checkbox"/>
			                        <label htmlFor="check1"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</div>
							<div className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check2" className="styled" type="checkbox"/>
			                        <label htmlFor="check2"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</div>
							<div className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check3" className="styled" type="checkbox"/>
			                        <label htmlFor="check3"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</div>
							<div className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check4" className="styled" type="checkbox"/>
			                        <label htmlFor="check4"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
							</div>
							<div className="Item">
								<div className="checkbox checkbox-primary">
			                        <input id="check5" className="styled" type="checkbox"/>
			                        <label htmlFor="check5"></label>
			                    </div>
								<div className="Name"><span>op</span><label>Oto prango</label></div>
								<div className="SmallText">I agree with you, current design are little borring and they need refresh. I just designed...</div>
								<div className="Date">aug 2</div>
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