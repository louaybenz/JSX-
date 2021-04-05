import React , { Component } from 'react'
import './App.css';
import img from './e30.jpg'


function App() {
  return (
    <div className="App">
      <h1 className="red" >jsx workshop</h1>
   
      {/* Hello world */}
      <div className="awesome" >
      <img src={img} style={{height:"300px"}} /> 
      <br></br>
        <img src="lowrider.jpg" style= {{height:"300px"}}></img>
          <label htmlFor="name">what's better 1 or 2: </label>
          <input type="text" id="name" />
        </div>
    </div>
  );
}

export default App;
