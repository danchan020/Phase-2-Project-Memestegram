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
					<label>Select Genre: </label>
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
			{renderPosts}
		</div>
	)





}

export default MainContent