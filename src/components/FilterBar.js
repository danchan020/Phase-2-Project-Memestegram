import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import Form from './Form'
import Favorites from './Favorites'
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';

// json-server --watch db.json --port 8000

function FilterBar() {
	const [favoritesList, setFavoritesList] = useState([])
	const [memes, setMemes] = useState([])
	const [page, setPage] = useState("/")

	const baseUrl = 'http://localhost:8000/memes'
	useEffect(() => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])

	function handleAddMeme(formData){
		setMemes([...memes, formData])
	 }
	
	const addToFavorites = (id) => {
		const findFaves = memes.find(meme => meme.id === id)
		const updatedFaves = [...favoritesList, findFaves]
		setFavoritesList(updatedFaves)		
	}

	const removeFromFavorites = (id) => {
		const filterFaves = favoritesList.filter(meme => meme.id !== id)
		setFavoritesList(filterFaves)
	}

	const favoriteFilter = memes.filter(meme => {
		if (meme.favorites === true) return meme
	})

	return (
		<div>
			<NavBar onChangePage = {setPage}/>
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme} />
				</Route>
				<Route exact path="/">
					<MainContent 
					memes={memes} 
					baseUrl={baseUrl} 
					addToFavorites={addToFavorites}
					removeFromFavorites={removeFromFavorites}
					 />
				</Route>
				<Route path="/favorites">
					<Favorites favoritesList={favoriteFilter} />
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar