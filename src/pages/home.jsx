import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Footer from '../components/footer';

 export default class Home extends React.Component {
  
      constructor(props) {
        super(props);
       
       document.getElementById('app').style.cssText = "background-image:url('assets/img/top_bg.png'); background-size: 100% auto; background-repeat:no-repeat;";
    }
     
      render() {
        return (
<div> 
	<Menu/>
<div className="MainContainer">
	<div className="container padding_0">
	
	<div className="leftDiv">
		<LeftSidebar/>
	</div>
		<div className="ContentDiv">
			<div className="Content">
				<div className="TipsterTable">
					<div className="Title"><span>Top advices</span></div>
					<table>
					    <thead>
					        <tr>
					            <th>sport</th>
					            <th>match name</th>
					            <th>pick</th>
					            <th>odd</th>
					            <th>date</th>
					        </tr>
					    </thead>
					    <tbody>
					        <tr>
					            <td className="Uppercase">football</td> 
					            <td className="Bold">SHC Fassa - Vipiteno</td> 
					            <td>> 2.5</td> 
					            <td>1.45</td> 
					            <td>26.5.2018 23:30</td> 
					        </tr> 
					        <tr>
					            <td className="Uppercase">football</td> 
					            <td className="Bold">Republic Congo - Libya</td> 
					            <td>X2</td> 
					            <td>1.45</td> 
					            <td>26.5.2018 23:30</td> 
					        </tr> 
					        <tr>
					            <td className="Uppercase">football</td> 
					            <td className="Bold">Nigeria - Angola</td> 
					            <td>2</td> 
					            <td>1.45</td> 
					            <td>26.5.2018 23:30</td> 
					        </tr>
					        <tr>
					            <td className="Uppercase">football</td> 
					            <td className="Bold">Chapecoense SC - Joinville</td> 
					            <td>> 2.5</td> 
					            <td>1.45</td> 
					            <td>26.5.2018 23:30</td> 
					        </tr>
					        <tr>
					            <td className="Uppercase">football</td> 
					            <td className="Bold">Avai - Figueirense</td> 
					            <td>> 2.5</td> 
					            <td>1.45</td> 
					            <td>26.5.2018 23:30</td> 
					        </tr>
					    </tbody>
					</table>
				</div>

				<div className="TipsterTable">
					<div className="Title"><span>Top Tipsters Advices</span></div>
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

			<RightBanner />


				<div className="TipsterTable">
					<div className="Title"><span>Last Forecasts</span></div>
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

				<div className="InsideBanners">
					<div className="col-sm-6 padding_0">
						<a href="#">
							<img src="assets/img/banner_5.png"/>
						</a>
					</div>
					<div className="col-sm-6 padding_0">
						<a href="#">
							<img src="assets/img/banner_6.png"/>
						</a>
					</div>
				</div>

			</div>
		</div>
	
		<div className="RightDiv">
			<RightBanner/>
		</div>
		
	</div>
</div>

	<Footer/>
	
</div>
          );
    }
 }
