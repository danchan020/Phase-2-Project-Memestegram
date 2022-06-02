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

	const updateFaves = (id, value) => {
	
		fetch(baseUrl + `/${id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"favorites": !value
			})
		})
			.then(r => r.json())
			.then((obj) => {
				const filterMemes = memes.filter(meme => meme.id !== id)
				const newMemes = [...filterMemes, obj]
				setMemes(newMemes)
			})
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
						updateFaves={updateFaves}
					/>
				</Route>
				<Route path="/favorites">
					<Favorites favoritesList={favoriteFilter}/>
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar