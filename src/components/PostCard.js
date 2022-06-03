import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({ id, url, genre, name, comments, favorites, addToFavorites, baseUrl }) {

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

	const handleLike = (e) => {
		setIsHeart(!isHeart)
		fetch(baseUrl + `/${id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify()
		})
			.then(r => r.json())
			.then(() => console.log())
	}

	//postcard- post is now post-card wrapper 

	return (
		<div className='postcard-wrapper'> 
			<div className='left-col'>

				<div className='post'>
					<img className="postcard-image" src={url} alt={name} />

					<div className='post-content'>
						<div className='reaction-wrapper'>
							<img
							onClick={handleLike}
							className='post-likes-icon'
							src={isHeart ? heartLinkFull : heartLink}
							/>
						</div>

						<h5 className='postcard-post-name'>{name}
						</h5>

						<p className='postcard-post-genre'>Genre: {genre}</p>
						
					</div>
					<div className='comment-wrapper'>
						<button onClick={() => setShowComments(!showComments)} >
						View All Comments
						</button>
					</div>

					<div>
					{showComments ? activeComments : null}
					</div>

				</div>
			</div>
		</div>
	)
}

export default ContentCard