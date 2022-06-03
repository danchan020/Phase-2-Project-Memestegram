import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import Form from './Form'
import Favorites from './Favorites'
import { Switch, Route } from "react-router-dom";
import Moment from 'react-moment';

// json-server --watch db.json --port 8000

function FilterBar() {
	const [memes, setMemes] = useState([])
	const [favoritesList, setFavoritesList] = useState([])

	const baseUrl = 'http://localhost:8000/memes'

	useEffect(() => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(data => {
				setMemes(data)
				setFavoritesList(data.filter(meme => meme.favorites === true))
			})
	}, [])

	const handleAddMeme = (formData) => {
		setMemes([...memes, formData])
		setFavoritesList([...favoritesList, formData])
	}

	const updateFaves = (id, value) => {
		fetch(baseUrl + `/${id}`, {
			method: 'PATCH',
			headers: {"Content-Type": "application/json",},
			body: JSON.stringify({"favorites": !value})
		})
			.then(resp => resp.json())
			.then((obj) => {
				const filterMemes = memes.filter(meme => meme.id !== id)
				const newMemes = [...filterMemes, obj]
				setFavoritesList(newMemes.filter(meme => meme.favorites === true))
				setMemes(newMemes)
			})
	}

	const handleDelete = (id) => {
		fetch(baseUrl + `/${id}`, {
			method: 'DELETE',
		})
			.then(resp => resp.json())
			.then(() => {
				const deleteMeme = memes.filter(meme => meme.id !== id)
				setFavoritesList(deleteMeme.filter(meme => meme.favorites === true))
				setMemes(deleteMeme)
			})
	}

	const sortMemes = memes.sort((a, b) => b.timestamp - a.timestamp)
	const sortFaveMemes = favoritesList.sort((a, b) => b.timestamp - a.timestamp)

	return (
		<div>
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme} />
				</Route>
				<Route exact path="/">
					<MainContent
						memes={sortMemes}
						baseUrl={baseUrl}
						updateFaves={updateFaves}
						handleDelete={handleDelete}
					/>
				</Route>
				<Route path="/favorites">
					<Favorites
						favoritesList={sortFaveMemes}
						updateFaves={updateFaves}
						handleDelete={handleDelete}
					/>
				</Route>
			</Switch>
		</div>
	)
}

export default FilterBar