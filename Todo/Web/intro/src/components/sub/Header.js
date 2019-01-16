import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {

	constructor(props){
		super(props);


		this.state = {
			authenticated : false,
			error: null
		}
	}


	render() {
		return (
			<div className="header">
				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Header;