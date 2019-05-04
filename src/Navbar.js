import React, { Component } from 'react';

class Navbar extends Component{
	render(){
		return (
			<div className="nav">
    			<ul>
  					<li><a href="default.asp">Home</a></li>
  					<li><a href="news.asp">News</a></li>
  					<li><a href="contact.asp">Contact</a></li>
  					<li><a href="about.asp">About</a></li>
				</ul>
				
			</div>			
		);
	}
}

export default Navbar;