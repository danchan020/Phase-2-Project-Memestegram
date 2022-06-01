import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({ id, url, genre, name, comments, favorites, addToFavorites, baseUrl, removeFromFavorites }) {

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
		fetch(baseUrl + `/${id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"favorites" : !isHeart
			})
		})
			.then(r => r.json())
			.then(() => {
				isHeart ? addToFavorites(id) : removeFromFavorites(id)
			})
	}


	return (
		<div className='postcard-post'>
			<img className="postcard-image" src={url} alt={name} />
			<br></br>
			<img
				onClick={handleLike}
				className='navigation-likes-icon'
				src={isHeart ? heartLinkFull : heartLink}
			/>
			<h5 className='postcard-post-name'>{name}</h5>
			<h5 className='postcard-post-genre'>Genre: {genre}</h5>
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