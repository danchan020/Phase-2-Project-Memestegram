import React, { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {

	const [search, setSearch] = useState("")
	const handleSearch = (newSearch) => setSearch(newSearch)

	return (
		<div>
			<Header handleSearch={handleSearch} />
			<FilterBar search={search} />
		</div>
	);
}

export default App;