import React, { useState } from 'react'
import Comments from './Comments'

function ContentCard({
	id,
	url,
	genre,
	name,
	comments,
	favorites,
	timestamp,
	baseUrl,
	updateFaves,
	handleDelete
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
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "comments": newComments })
		})
			.then(resp => resp.json())
			.then(() => {
				setAddComment("")
			})
	}

	const handleLike = () => {
		updateFaves(id, isHeart)
		setIsHeart(!isHeart)
	}

	const deletePost = () => handleDelete(id)

	const date = new Date(timestamp)
	const renderDate = (
		(date.getMonth() + 1) +"/" + 
		date.getDate() + "/" + 
		date.getFullYear()
	);

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
						<h5 className='postcard-post-name'>{name}</h5>
						<p className='postcard-post-genre'>Genre: {genre}</p>
						<p className='postcard-post-genre'>Date: {renderDate}</p>
					</div>
					<div>
						<button onClick={deletePost}>Delete Post</button>
					</div>
					<div className='comment-wrapper'>
						<button onClick={() => setShowComments(!showComments)} >
							{showComments ? "Hide Comments" : "View Comments"}
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