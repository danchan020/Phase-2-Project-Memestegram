import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList, handleFaves }) {

	const renderPosts = favoritesList.map(post => {
		return (
			<PostCard
				key={post.id}
				post={post}
				{...post}
				handleFaves={handleFaves}
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