import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({
	id,
	url,
	genre,
	name,
	comments,
	favorites,
	baseUrl,
	handleFaves,
	updateFaves,
}) {

	const heartLinkFull = "https://cdn-images-1.medium.com/max/800/1*km6tQMVzzuccuhE0MxvSzQ.png"
	const heartLink = "https://cdn-images-1.medium.com/max/800/1*vtFx84vFOMGI76SfQTGCVQ.png"

	const [showComments, setShowComments] = useState(false)
	const [isHeart, setIsHeart] = useState(favorites)
	const [userComments, setUserComments] = useState(comments)
	const [addComment, setAddComment] = useState("")

	const handleChange = (e) => setAddComment(e.target.value)

	const handleSubmit = (e) => {
		e.preventDefault()
		const newComments = [...userComments, addComment]
		setUserComments(newComments)
		fetch(baseUrl + `/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"comments" : newComments
			})
		}).then(resp => resp.json())
			.then(() => {
				setAddComment("")
			})
	}

	const handleLike = () => {
		updateFaves(id, isHeart)
		setIsHeart(!isHeart)
	}

	const renderComments = userComments.map((comment, index) => {
		return <Comments key={comment[index]} comment={comment} />
	})

	const activeComments =
		<div>
			{renderComments}
			<form onSubmit={handleSubmit} onChange={handleChange} >
				<input type="text" value={addComment}></input>
				<button type="submit">Add Comment</button>
			</form>
		</div>

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