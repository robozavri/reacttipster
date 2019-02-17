import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Footer from '../components/footer';

 export default class About extends React.Component {
  
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
				<div className="LoginForm">
					<div className="col-sm-3"></div>
					<div className="col-sm-6">
						<div className="TitleText">
							<label>Contact Us</label>
 						</div>
						<div className="form-group">
							<input type="text" placeholder="Your name"/>
						</div>
						<div className="form-group">
							<input type="password" placeholder="Email"/>
						</div>
						<div className="form-group">
							<textarea placeholder="Message"></textarea>
						</div>		
						<div className="form-group">
							<button className="Button">send</button>
						</div>
					</div>
					<div className="col-sm-3"></div>
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