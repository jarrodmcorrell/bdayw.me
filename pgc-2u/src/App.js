import React, { useEffect, useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import db from "./firebase";

const divStyle={
  width:'30%'
};



function App() {

  const createCard = () => {
    const cardName = document.getElementById("outlined-basic").value;
    const text = document.getElementById("linktext");
    /** 
    if(cardName){
      db.collection("cards").add({
        name: cardName,
      });
    }
    */
    //text.innerHTML = cardName;
  }

  return (
    <div className="App">
      <h1>Personalized Greeting Cards 2 U</h1>
        <div className="titletext">
          <TextField id="outlined-basic" style={divStyle} label="Personalized Title" variant="outlined" />
        </div>
        <div className="gsubmit">
          <Button className="card-button" onClick={createCard} variant="contained" color="secondary">
            Get Link
          </Button>
        </div>
      <a href="https://www.google.com" id="linktext"className="linktext">https://www.google.com</a>
    </div>
  );
}

export default App;
