import React from 'react'
import PostCard from './PostCard'

function Favorites({ favoritesList }) {

	console.log(favoritesList)
	const renderPosts = favoritesList.map(post => {
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