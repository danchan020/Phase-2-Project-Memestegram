import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({ id, url, genre, name, comments }) {

	const [showComments, setShowComments] = useState(false)

	const renderComments = comments.map((comment, index) => {
		return <Comments key={comment[index]} comment={comment} />
	})

	return (
		<div>
			<img src={url} alt={name} />
			<h5>{name}</h5>
			<p>Genre: {genre}</p>
			<button onClick={() => setShowComments(!showComments)} >
				View All Comments
			</button>
			<div>
				{showComments ? renderComments : null}
			</div>
		</div>
	)
}

export default ContentCard