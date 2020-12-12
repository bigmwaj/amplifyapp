import React from 'react';
import logo from './logo.svg';
import bams from './bams.jpg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bigmwaj wishes you <b>Happy Cameroon Independance Day</b> from AWS</h1>
        <p>
        	<img src={bams} width="100px" className="bams-proud" alt="Bams proud" />
        	<br/>Be proud of who we are !!!
        </p>
      </header>
    </div>
  );
}

export import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';