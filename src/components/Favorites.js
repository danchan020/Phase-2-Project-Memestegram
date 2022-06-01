import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoriteFilter }) {

	console.log(favoriteFilter)
	const renderPosts = favoriteFilter.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				// addtoFavorites={addtoFavorites}
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