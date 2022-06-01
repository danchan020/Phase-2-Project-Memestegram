import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form'
import Favorites from './components/Favorites';
import MainContent from './components/MainContent';
import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {

	const [memes, setMemes] = useState([])

	useEffect(() => {
		fetch('http://localhost:8000/memes')
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])

	return (
		<div>
			<Header />
			<Switch>
				<Route path="/form">
					<Form />
				</Route>
				<Route path="/home">
					<MainContent memes={memes} />
				</Route>
				<Route path="/favorites">
					<Favorites />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
