import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form'
import Favorites from './components/Favorites';
import MainContent from './components/MainContent';
import { Switch, Route } from "react-router-dom";

import './App.css';

// json-server --watch db.json --port 8000

function App() {

	const [memes, setMemes] = useState([])
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		fetch('http://localhost:8000/memes')
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])


	const addtoFavorites = (id) => {
		console.log(id)
	}

	return (
		<div>
			<Header />
			<Switch>
				<Route path="/form">
					<Form />
				</Route>
				<Route path="/home">
					<MainContent memes={memes} addtoFavorites={addtoFavorites} />
				</Route>
				<Route path="/favorites">
					<Favorites />
				</Route>
			</Switch>
		</div>
	);
}

export default App;