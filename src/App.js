import React from 'react';
import logo from './logo.svg';
import bams from './bams.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bigmwaj wishes Happy Cameroon Independance Day from AWS</h1>
        <p>
        	<img src={bams} className="bams-proud" alt="Bams proud" />
        	<br>Be proud of who we are ...
        <p>
      </header>
    </div>
  );
}

export default App;