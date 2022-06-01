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

	useEffect(() => {
		fetch('http://localhost:8000/memes')
			.then(resp => resp.json())
			.then(memeObj => setMemes(memeObj))
	}, [])

  function handleAddMeme(formData){
    setMemes([...memes, formData])
  }

	return (
		<div>
			<Header />
			<Switch>
				<Route path="/form">
					<Form handleAddMeme={handleAddMeme}/>
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