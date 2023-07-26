import React from 'react';
import './App.css';
import mapImage from './images/jhoto-kanto-map.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mapImage} alt="Map of Jhoto and Kanto" />
      </header>
    </div>
  );
}

export default App;
