import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList, removeFromFavorites }) {

	const renderPosts = favoritesList.map(post => {
		return (
			<PostCard
				key={post.id}
				post={post}
				{...post}
				addtoFavorites={removeFromFavorites}
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