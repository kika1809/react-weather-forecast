import React from 'react';
import './App.css';

import Weather from "./Weather";


function App() {
  return (
    <div className="App">
        <div className="container">
      <Weather defaultCity="Split"/>
      <footer>
        <p>This project was coded by <a href="https://app.netlify.com/sites/pedantic-golick-389ca6" target="_blank" 
            rel="noopener noreferrer">
        Kristina Kocur</a> and it is open-sourced on <a href="https://github.com/kika1809/react-weather" target="_blank" 
            rel="noopener noreferrer">GitHub</a>, hosted on <a href="https://laughing-kirch-85952c.netlify.app/" target="_blank" 
            rel="noopener noreferrer">Netlify</a>.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
