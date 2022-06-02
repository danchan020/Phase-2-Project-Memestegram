import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList }) {

	const renderPosts = favoritesList.map(post => {
		return (
			<PostCard
				key={post.id}
				post={post}
				{...post}
			/>
		)
	})


	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default Favorites