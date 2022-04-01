import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyPoster from './myPoster';

function App() {
  return (

   
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a className="App-link">
           <MyPoster/>
        </a>
    </div>
  );
}

export default App;
