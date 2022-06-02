import React, { useState, useEffect, useRef } from 'react'

function Form({ handleAddMeme }) {

  const initialMemeData = {
    id: "",
    name: "",
    url: "",
    genre: "coding",
    comments: [],
    favorites: true
  }

  const [formData, setFormData] = useState(initialMemeData)

  function handleChange(e) {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      id: "",
      name: formData.name,
      url: formData.url,
      genre: formData.genre,
      comments: [],
      favorites: true
    }
    fetch('http://localhost:8000/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }).then(resp => resp.json())
      .then(data => {
        handleAddMeme(data)
        setFormData(initialMemeData)
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
        ref = {focusEffect}
      />

      <label> Image URL: </label>
      <input
        type="text"
        id="url"
        value={formData.meme}
        onChange={handleChange}
      />

      <img
        src={formData.meme || "https://codingbootcamps.io/wp-content/uploads/m2.png"}
        alt="meme preview"
      />

      <label> Genre: </label>
      <select
        type="text"
        id="genre"
        value={formData.genre}
        onChange={handleChange}
      >
        <option value="coding"> Coding </option>
        <option value="pop culture"> Pop Culture </option>
        <option value="troll"> Troll </option>
        <option value="fails"> Fails </option>
        <option value="sports"> Sports </option>
        <option value="animals"> Animals </option>
      </select>


      <input type="submit" value="Post" />

    </form>
  )
}

export default Form