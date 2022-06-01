import React from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addtoFavorites }) {

	const renderPosts = memes.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				addtoFavorites={addtoFavorites}
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