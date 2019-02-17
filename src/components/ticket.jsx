import React from 'react';
import ReactDOM from 'react-dom';

 export default class Ticket extends React.Component {
  
      constructor(props) {
        super(props);
      
    }
     
      render() {
        return (
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
    );
    }
}