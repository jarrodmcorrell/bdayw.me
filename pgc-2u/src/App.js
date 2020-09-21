import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <h1>Personalized Greeting Cards 2 U</h1>
      <div className="titletext">
        <TextField id="outlined-basic" label="Personalized Title" variant="outlined" />
      </div>
      <div className="gsubmit">
        <Button variant="contained" color="secondary">
          Get Link
        </Button>
      </div>
      <p className="linktext"></p>
    </div>
  );
}

export default App;
