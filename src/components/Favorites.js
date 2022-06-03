import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList, updateFaves, handleDelete }) {

	const renderPosts = favoritesList.map(post => {
		return (
			<PostCard
				key={post.id}
				post={post}
				{...post}
				updateFaves={updateFaves}
				handleDelete={handleDelete}
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