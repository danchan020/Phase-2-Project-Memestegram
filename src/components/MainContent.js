import React from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addToFavorites, baseUrl }) {

	const renderPosts = memes.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				addToFavorites={addToFavorites}
				baseUrl={baseUrl}
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