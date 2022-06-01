import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import Form from './Form'
import Favorites from './Favorites'
import { Switch, Route } from "react-router-dom";

// json-server --watch db.json --port 8000

function FilterBar() {
	const [favoritesList, setFavoritesList] = useState([])
	const [memes, setMemes] = useState([])

	const baseUrl = 'http://localhost:8000/memes'
	useEffect(() => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])

	function handleAddMeme(formData){
		setMemes([...memes, formData])
	 }
	
	// const addToFavorites = (id) => {
	// 	console.log(id)
	// 	const updateFavorites = memes.find(meme => meme.id === id)
	// 	console.log(updateFavorites)
	// }

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
					<MainContent memes={memes} baseUrl={baseUrl} />
				</Route>
				<Route path="/favorites">
					<Favorites favoriteFilter={favoriteFilter} />
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar