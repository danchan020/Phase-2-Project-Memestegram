import React, {useState, useEffect, useRef} from 'react'

function Form({handleAddMeme}) {

const initialMemeData = {
  title: "",
  meme: "",
  genre: "coding"
}

const [formData, setFormData] = useState(initialMemeData)

function handleChange (e){
  const {id, value} = e.target
  setFormData( {...formData, [id] : value})
}

function handleSubmit (e){
  e.preventDefault()
  fetch('http://localhost:8000/memes', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(resp => resp.json())
    .then(formData => {
      handleAddMeme(formData)
      setFormData(initialMemeData)
    })
}

const focusEffect = useRef()

useEffect(() => {focusEffect.current.focus()})

  return (
    <form onSubmit = {handleSubmit}>
      <h1> Post Your Meme!</h1>
      <label> Title: </label>
      <input
        type="text"
        id="title"
        value = {formData.title}
        onChange = {handleChange}
        ref = {focusEffect}
      />

      <label> Image URL: </label>
      <input
        type="text"
        id="meme"
        value = {formData.meme}
        onChange = {handleChange}
      />

      <img
        src = {formData.meme || "https://codingbootcamps.io/wp-content/uploads/m2.png"}
        alt = "meme preview"
      />

      <label> Genre: </label>
      <select
        type="text"
        id="genre"
        value = {formData.genre}
        onChange = {handleChange}
      >
        <option value = ""> Pop Culture </option>
        <option value = ""> Coding </option>
        <option value = ""> Troll </option>
        <option value = ""> Fails </option>
        <option value = ""> Sports </option>
        <option value = ""> Animals </option>
      </select>
      

      <input type="submit" value="Post" />

    </form>
  )
}

export default Form