import React from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addToFavorites, baseUrl, handleFaves, updateFaves }) {

	const renderPosts = memes.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				addToFavorites={addToFavorites}
				// removeFromFavorites={removeFromFavorites}
				baseUrl={baseUrl}
				handleFaves={handleFaves}
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