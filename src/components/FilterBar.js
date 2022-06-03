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
	// const [page, setPage] = useState("/")

	const baseUrl = 'http://localhost:8000/memes'

	useEffect(() => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(data => {
				setMemes(data)
				setFavoritesList(data.filter(meme => meme.favorites === true))
			})
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
				const newMemes = [...filterMemes, obj].sort((a , b) => b.timestamp - a.timestamp)
				setFavoritesList(newMemes.filter(meme => meme.favorites === true))
				setMemes(newMemes)
			})
	} 

	const sortMemes = memes.sort((a , b) => b.timestamp - a.timestamp)
	console.log(sortMemes)
	// const unixTimestamp = 198784740
	// const date = new Date(unixTimestamp)
	// console.log("Date: "+date.getDate()+
	// "/"+(date.getMonth()+1)+
	// "/"+date.getFullYear()+
	// " "+date.getHours()+
	// ":"+date.getMinutes()+
	// ":"+date.getSeconds());
	
	return (
		<div>
			{/* <NavBar onChangePage={setPage} /> */}
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme} />
				</Route>
				<Route exact path="/">
					<MainContent
						memes={sortMemes}
						baseUrl={baseUrl}
						updateFaves={updateFaves}
					/>
				</Route>
				<Route path="/favorites">
					<Favorites favoritesList={favoritesList} updateFaves={updateFaves}/>
				</Route>
			</Switch>

		</div>
	)
}

export default FilterBar