import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/menu';
import LeftSidebar from '../components/leftSidebar';
import RightBanner from '../components/rightBanner';
import Ticket from '../components/ticket';
import Footer from '../components/footer';

 export default class AddTips extends React.Component {
  
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
				<ul className="SpeciesTab">
					<li className="active"><a href="#FootballTab" className="FOOTBALL" data-toggle="tab"><span></span>football</a></li>
					<li><a href="#TennisTab" className="TENNIS" data-toggle="tab"><span></span>tennis</a></li>
					<li><a href="#BasketballTab" className="BASKETBALL" data-toggle="tab"><span></span>basketball</a></li>
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
