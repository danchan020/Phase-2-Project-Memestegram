import React, {useState} from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addToFavorites, baseUrl, updateFaves, handleDelete }) {

	const [selectedGenre, setSelectedGenre] = useState("All")
	
	const handleChange = (e) => setSelectedGenre(e.target.value)  

	const filteredGenres = memes.filter(meme => (
		selectedGenre === 'All' || meme.genre === selectedGenre))

	const renderPosts = filteredGenres.map(post => {
		return (
			<PostCard
				key={post.id}
				{...post}
				addToFavorites={addToFavorites}
				baseUrl={baseUrl}
				updateFaves={updateFaves}
				handleDelete={handleDelete}
			/>
		)
	})
	

	// add Genre label to drop down filter

	return (
		<div>
			
			<div className='genre-bar'>
				<div>
					<label className='genre-bar-select'>Select Genre: </label>
				</div>
				<select
					className='genre-bar-text'
					type = "text" 
					onChange = {handleChange}
					>
					<option 
					className='option'
					value="All"> All </option>
					<option value="Coding"> Coding </option>
					<option value="Pop Culture"> Pop Culture </option>
					<option value="Troll"> Troll </option>
					<option value="Fails"> Fails </option>
					<option value="Sports"> Sports </option>
					<option value="Animals"> Animals </option>
				</select>
			</div>
			
			<div className='filter-box'>
				<img 
				className='filter-box-cool'
				src='https://cdn-images-1.medium.com/max/1600/1*dxqYYwASUE0JTX-svqgEFA.png' />

				<img
				className='filter-box-funny'
				src='https://cdn-images-1.medium.com/max/1600/1*tY2nbxgv-6xA0eUHTih3JQ.png' 
				/>

				<img
				className='filter-box-shocking'
				src='https://cdn-images-1.medium.com/max/1600/1*9PovJWTegJ87jLr0-Uw0MQ.png' 
				/>

				<img
				className='filter-box-questionable'
				src='https://cdn-images-1.medium.com/max/1600/1*PFqWC7Y79cvJgvUZ6_G6SA.png' 
				/>

			</div>

			{renderPosts}
		</div>
	)





}

export default MainContent