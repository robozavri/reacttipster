import React from 'react';
import ReactDOM from 'react-dom';

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Footer from '../components/footer';

 export default class ContactUs extends React.Component {
  
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
				<div className="AboutPageDiv">
					<div className="col-sm-5">
						<div className="AboutLeft">
							<div className="AboutBlueTitle">
								First Georgian Bookmaker service predictions
							</div>
							<div className="AboutSocialDiv">
								<div className="Title">contact us</div>
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-linkedin"></i></a>
							</div>
						</div>
					</div>
					<div className="col-sm-7">
						<div className="AboutContent">
							<div className="Title">About Us</div>
							<div className="Text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
							</div>
						</div>
					</div>
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