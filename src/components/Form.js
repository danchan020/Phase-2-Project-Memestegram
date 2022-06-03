import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

function Form({ handleAddMeme }) {

	const initialMemeData = {
		id: "",
		name: "",
		url: "",
		genre: "coding",
		comments: [],
		favorites: true,
		timestamp: "",
	}
	
	const [formData, setFormData] = useState(initialMemeData)

	const history = useHistory()

	const handleChange = (e) => {
		const { id, value } = e.target
		setFormData({ ...formData, [id]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newPost = {
			id: "",
			name: formData.name,
			url: formData.url,
			genre: formData.genre,
			comments: [],
			favorites: true,
			timestamp: new Date().getTime()
		}
		fetch('http://localhost:8000/memes', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newPost)
		})
			.then(resp => resp.json())
			.then(data => {
				handleAddMeme(data)
				history.push(`/`)
			})
	}

	const focusEffect = useRef()
	useEffect(() => { focusEffect.current.focus() }, [])

	return (
		<form onSubmit={handleSubmit}>
			<h1> Post Your Meme!</h1>
			<label> Title: </label>
			<input
				type="text"
				id="name"
				value={formData.title}
				onChange={handleChange}
				ref={focusEffect}
			/>

			<label> Image URL: </label>
			<input
				type="text"
				id="url"
				value={formData.meme}
				onChange={handleChange}
			/>

			<img
				src={formData.url || "https://codingbootcamps.io/wp-content/uploads/m2.png"}
				alt="meme preview"
			/>

			<label> Genre: </label>
			<select
				type="text"
				id="genre"
				value={formData.genre}
				onChange={handleChange}
			>
				<option value="Coding"> Coding </option>
				<option value="Pop culture"> Pop Culture </option>
				<option value="Troll"> Troll </option>
				<option value="Fails"> Fails </option>
				<option value="Sports"> Sports </option>
				<option value="Animals"> Animals </option>
			</select>
			<input type="submit" value="Post" />
		</form>
	)
}

export default Form