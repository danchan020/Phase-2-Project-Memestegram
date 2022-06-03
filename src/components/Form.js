import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

function Form({ handleAddMeme }) {

	const initialMemeData = {
		id: "",
		name: "",
		url: "",
		genre: "",
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
			headers: { 'Content-Type': 'application/json' },
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

		<form
			onSubmit={handleSubmit}>

			<div className='form'>
				<h3 className='form-title'> Submit Your Meme!</h3>
				<input
					className='form-title-input'
					id="name"
					onChange={handleChange}
					placeholder='Title:'
					ref={focusEffect}
					type="text"
					value={formData.title}
				/>
				<br></br>
				<input
					className='form-url-input'
					id="url"
					onChange={handleChange}
					placeholder="URL:"
					type="text"
					value={formData.meme}

				/>
				<div >
					<select
						className='form-input-select'
						type="text"
						id="genre"
						value={formData.genre}
						onChange={handleChange}
					>
						<option value="" disabled selected> Select Genre</option>
						<option value="Coding"> Coding </option>
						<option value="Pop culture"> Pop Culture </option>
						<option value="Troll"> Troll </option>
						<option value="Fails"> Fails </option>
						<option value="Sports"> Sports </option>
						<option value="Animals"> Animals </option>
					</select>
					<div>
						<input className='form-post' type="submit" value="Post" />
					</div>
				</div>

				<img
					className='form-image'
					src={formData.url || "https://codingbootcamps.io/wp-content/uploads/m2.png"}
					alt="meme preview"
				/>
			</div>
		</form>
	)
}

export default Form