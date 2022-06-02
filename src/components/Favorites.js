import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList, updateFaves }) {

	const renderPosts = favoritesList.map(post => {
		return (
			<PostCard
				key={post.id}
				post={post}
				{...post}
				updateFaves={updateFaves}
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