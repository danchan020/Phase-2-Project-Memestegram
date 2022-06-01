import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({ id, url, genre, name, comments }) {
	
	const [showComments, setShowComments] = useState(false)
	const [isHeart, setIsHeart] = useState(false)

	const heartLinkFull = "https://cdn-images-1.medium.com/max/800/1*km6tQMVzzuccuhE0MxvSzQ.png"
	const heartLink = "https://cdn-images-1.medium.com/max/800/1*vtFx84vFOMGI76SfQTGCVQ.png"

	const renderComments = comments.map((comment, index) => {
		return <Comments key={comment[index]} comment={comment} />
	})


	return (
		<div>
			<img src={url} alt={name} />
			<h5>{name}</h5>
			<img
				onClick={() => setIsHeart(!isHeart)}
				className='navigation-likes-icon'
				src={isHeart ? heartLinkFull : heartLink} />
			<p>Genre: {genre}</p>
			<button onClick={() => setShowComments(!showComments)} >
				View All Comments
			</button>
			<div>
				{showComments ? renderComments : null}
				<form>
					<input></input>
					<button type="submit">Add Comment</button>
				</form>
			</div>
		</div>
	)
}

export default ContentCard