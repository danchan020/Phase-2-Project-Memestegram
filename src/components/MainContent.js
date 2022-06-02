import React, {useState} from 'react'
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
			<div className='filter-box'>
				<button>
					<img 		
					className='filter-box-cool'
					src='https://cdn-images-1.medium.com/max/800/1*dxqYYwASUE0JTX-svqgEFA.png' />
				</button>
				<div className="pop-culture">Pop Culture</div>

				<button>
				<img className='filter-box-funny'
					src='https://cdn-images-1.medium.com/max/800/1*tY2nbxgv-6xA0eUHTih3JQ.png' />
				</button>
				<div className="troll">Troll</div>

				<button>
				<img className='filter-box-shocking'
					src='https://cdn-images-1.medium.com/max/800/1*9PovJWTegJ87jLr0-Uw0MQ.png' />
				</button>
				<div className="animals">Animals</div>

				<button>
				<img className='filter-box-questionable'
					src='https://cdn-images-1.medium.com/max/800/1*PFqWC7Y79cvJgvUZ6_G6SA.png' />
				</button>
				<div className="fails">Fails</div>
			</div>
			{renderPosts}
		</div>
	)





}

export default MainContent