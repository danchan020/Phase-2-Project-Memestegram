import React, {useState} from 'react'

function Form() {

const [formData, setFormData] = useState({
  title: "",
  meme: "",
  genre: "coding"
})

function handleChange (e){
  const key = e.target.id
  setFormData( {...formData, [key] : e.target.value})
}

console.log(formData)

  return (
    <form >
      <h1> Post Your Meme!</h1>
      <label>Title: </label>
      <input
        type="text"
        id="title"
        value = {formData.title}
        onChange = {handleChange}
      />

      <label> Image URL: </label>
      <input
        type="text"
        id="meme"
        value = {formData.meme}
        onChange = {handleChange}
      />

      <img
        src = {"https://codingbootcamps.io/wp-content/uploads/m2.png"}
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