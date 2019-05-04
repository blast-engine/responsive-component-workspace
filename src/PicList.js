import React, { Component } from 'react';

class PicList extends Component{
// <li><img src="https://robohash.org/frog" alt="robot"></img></li>
//   					<li><img src="https://robohash.org/blue" alt="robot"></img></li>

	render(){
		return (
			<div className="pics">
    			<ul>
  					<li><img src="https://robohash.org/sample" alt="robot"></img></li>
  					<li><img src="https://robohash.org/simple" alt="robot"></img></li>
  					<li><img src="https://robohash.org/roboto" alt="robot"></img></li>
  					<li><img src="https://robohash.org/coffee" alt="robot"></img></li>
  					<li><img src="https://robohash.org/frog" alt="robot"></img></li>
  					<li><img src="https://robohash.org/blue" alt="robot"></img></li>
				</ul>
				
			</div>			
		);
	}
}

export default PicList;