import React from 'react'

function ContentCard({ id, url, genre, name, comments }) {
	return (
		<div>
			<img src={url} alt={name}/>
			<h5>{name}</h5>
			<p>{genre}</p>
			<p>{comments}</p>
		</div>
	)
}

export default ContentCard