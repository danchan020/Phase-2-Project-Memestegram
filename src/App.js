import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form'
import Favorites from './components/Favorites';
import MainContent from './components/MainContent';
import {Switch, Route} from "react-router-dom";

import './App.css';

function App() {

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(resp => resp.json())
    .then(memeObj => console.log(memeObj))
  })

  return (
    <div>
      <Header/>
      <Switch>
        <Route path = "/form">
          <Form handleAddMeme = {handleAddMeme}/>
        </Route>
        <Route path = "/home">
          <MainContent />
        </Route>
        <Route path = "/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
