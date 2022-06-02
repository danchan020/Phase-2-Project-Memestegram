import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import Form from './Form'
import Favorites from './Favorites'
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';

// json-server --watch db.json --port 8000

function FilterBar() {
	const [memes, setMemes] = useState([])
	const [page, setPage] = useState("/")

	const baseUrl = 'http://localhost:8000/memes'
	useEffect(() => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(data => setMemes(data))
	}, [])


	const handleAddMeme = (formData) => setMemes([...memes, formData])

	const addToFavorites = (id) => {
		const findFaves = memes.find(meme => meme.id === id)
		if(!memes.includes(findFaves)) {
		}		
	}

	const removeFromFavorites = (id) => {
		const filterFaves = memes.filter(meme => meme.id !== id)
	}

	const favoriteFilter = memes.filter(meme => {
		if (meme.favorites === true) return meme
	})

	return (
		<div>
			<NavBar onChangePage={setPage} />
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme} />
				</Route>
				<Route exact path="/">
					<MainContent
						memes={memes}
						baseUrl={baseUrl}
						addToFavorites={addToFavorites}
						// removeFromFavorites={removeFromFavorites}
					/>
				</Route>
				<Route path="/favorites">
					<Favorites favoritesList={favoriteFilter} removeFromFavorites={removeFromFavorites}/>
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar