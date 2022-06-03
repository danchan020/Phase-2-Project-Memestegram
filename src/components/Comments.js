import React from 'react'

function Comments({ index, comment }) {

	return (
		<div>
			<p>"{comment}"</p>
			<button>X</button>
		</div>
	)
}

export default Comments