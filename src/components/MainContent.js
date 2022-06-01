import React from 'react'
import PostCard from './PostCard';

function MainContent({ memes }) {

	console.log("POTATO", memes)
	const renderPosts = memes.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
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