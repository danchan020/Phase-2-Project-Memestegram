import React, {useState} from 'react'
import PostCard from './PostCard';

function MainContent({ memes, addToFavorites, baseUrl, updateFaves }) {

	const [selectedGenre, setSelectedGenre] = useState("Default")
	
	const handleChange = (e) => {
		setSelectedGenre(e.target.value)
		}  


	const filteredGenres = memes
		.filter(meme => selectedGenre === 'Default' || meme.genre === selectedGenre)

	const renderPosts = filteredGenres.map(post => {
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
			<select  
			type = "text" 
			onChange = {handleChange}
			>

				<option value="Coding"> Coding </option>
				<option value="Pop Culture"> Pop Culture </option>
				<option value="Troll"> Troll </option>
				<option value="Fails"> Fails </option>
				<option value="Sports"> Sports </option>
				<option value="Animals"> Animals </option>

			</select>
			{renderPosts}
		</div>
	)
}

export default MainContent