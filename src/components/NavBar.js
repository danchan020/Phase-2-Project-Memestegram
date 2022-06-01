import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<nav>
			<Link exact to="/">Home</Link>
			<Link to="favorites">Favorites</Link>
			<Link to="form">Form</Link>
		</nav>
	)
}

export default NavBar