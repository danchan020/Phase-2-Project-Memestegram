import React from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addToFavorites, baseUrl, updateFaves }) {

	const renderPosts = memes.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				addToFavorites={addToFavorites}
				// removeFromFavorites={removeFromFavorites}
				baseUrl={baseUrl}
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

export default MainContent