import React from 'react';
import './App.css';
import { Player } from 'video-react';
import videos from '../src/niilo22joulu.mp4';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <video loop autoPlay>
          <source src={videos} type="video/mp4"/>
        </video>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
