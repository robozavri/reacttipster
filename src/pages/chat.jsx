import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import UserInfo from '../components/userinfo';
import Ticket from '../components/ticket';
import Footer from '../components/footer';

 export default class Chat extends React.Component {
  
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
				<div className="ChatPageDiv">
					<div className="Head">
						<div className="GoBack"><i className="fa fa-angle-left"></i> <span>go to messages</span></div>
					</div>
					<div className="HeadGray"> 
						<div className="col-sm-6 padding_0">
							<div className="User">
								<span>op</span>
								<label>Oto prango</label>
							</div>
						</div>
						<div className="col-sm-6 padding_0">
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
							<button className="Button Padding15 pull-right">view profile</button>
						</div> 
					</div>
					<div className="ChatHistoryDiv">
						<div className="Item">
							<div className="DisplayFlex">
								<div className="User">
									<span>op</span>
								</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="Date">5:23 PM</div>
							</div>
						</div>
						<div className="Item MyItem">
							<div className="DisplayFlex">
								<div className="Date">5:23 PM</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="User">
									<span>op</span>
								</div>
							</div>
						</div>
						<div className="Item">
							<div className="DisplayFlex">
								<div className="User">
									<span>op</span>
								</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="Date">5:23 PM</div>
							</div>
							<div className="Image">
								<img src="assets/img/chat_1.jpg"/>
							</div>
						</div> 
						<div className="Item">
							<div className="DisplayFlex">
								<div className="User">
									<span>op</span>
								</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="Date">5:23 PM</div>
							</div>
						</div>
						<div className="Item MyItem">
							<div className="DisplayFlex">
								<div className="Date">5:23 PM</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="User">
									<span>op</span>
								</div>
							</div>
						</div>
						<div className="Item">
							<div className="DisplayFlex">
								<div className="User">
									<span>op</span>
								</div>
								<div className="Text">
									Hi Nicholas., I'd like to add you as a contact.  From behance
								</div>
								<div className="Date">5:23 PM</div>
							</div>
							<div className="Image">
								<img src="assets/img/chat_1.jpg"/>
							</div>
						</div>
					</div> 
					<div className="WriteMessage">
						<div className="UploadFile">
							<i className="fa fa-picture-o"></i>
							<input type="file" title=""/>
						</div>
						<div className="TextDiv">
							<textarea placeholder="It was nice to meet you"></textarea>
						</div>
						<div className="SendInfo">
							press <span>Enter</span> to send
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