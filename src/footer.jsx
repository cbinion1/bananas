import React from 'react';
import Logo from './images/cameronBinionLogo.png';


export default class MyFooter extends React.Component {
	render() {
		return(
			<div>
			<p>
				Copyright 2018 by Cameron Binion
			</p>
			<img src={Logo} width="100" height="100" />
			</div>
		)
	}
}


