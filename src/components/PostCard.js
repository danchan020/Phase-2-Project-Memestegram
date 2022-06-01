import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({ id, url, genre, name, comments, favorites, addtoFavorites }) {

	const heartLinkFull = "https://cdn-images-1.medium.com/max/800/1*km6tQMVzzuccuhE0MxvSzQ.png"
	const heartLink = "https://cdn-images-1.medium.com/max/800/1*vtFx84vFOMGI76SfQTGCVQ.png"

	const [showComments, setShowComments] = useState(false)
	const [isHeart, setIsHeart] = useState(favorites)

	const renderComments = comments.map((comment, index) => {
		return <Comments key={comment[index]} comment={comment} />
	})

	const activeComments =
		<div>
			{renderComments}
			<form>
				<input></input>
				<button type="submit">Add Comment</button>
			</form>
		</div>

	const handleLike = () => {
		setIsHeart(!isHeart)
		console.log(favorites)
		return isHeart === true ? addtoFavorites(id) : null
	}

	return (
		<div>
			<img src={url} alt={name} />
			<h5>{name}</h5>
			<img
				onClick={handleLike}
				className='navigation-likes-icon'
				src={isHeart ? heartLinkFull : heartLink} />
			<p>Genre: {genre}</p>
			<button onClick={() => setShowComments(!showComments)} >
				View All Comments
			</button>
			<div>
				{showComments ? activeComments : null}

			</div>
		</div>
	)
}

export default ContentCard