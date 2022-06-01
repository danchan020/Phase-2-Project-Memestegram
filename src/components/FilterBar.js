import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import Form from './Form'
import Favorites from './Favorites'
import { Switch, Route } from "react-router-dom";

// json-server --watch db.json --port 8000

function FilterBar() {
	const [favoritesList, setFavoritesList] = useState([])
	const [memes, setMemes] = useState([])

	useEffect(() => {
		fetch('http://localhost:8000/memes')
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])

	function handleAddMeme(formData){
		setMemes([...memes, formData])
	 }
	
	const addtoFavorites = (id) => {
		console.log(id)
	}

	const favoriteFilter = memes.filter(meme => {
		if (meme.favorites === true) return meme
	})

	// fetch request to post add comments
	// a filter to look at favorites truthy falsey value

	return (
		<div>
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme} />
				</Route>
				<Route exact path="/">
					<MainContent memes={memes} addtoFavorites={addtoFavorites} />
				</Route>
				<Route path="/favorites">
					<Favorites favoriteFilter={favoriteFilter} />
					{/* react not seeing favorites component */}
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar