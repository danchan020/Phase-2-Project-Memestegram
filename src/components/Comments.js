import React from 'react'

function Comments({ comment }) {

	return (
		<div>
			<p className="comment-post">"{comment}"</p>
		</div>
	)
}

export default Comments