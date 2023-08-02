import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import DestinationButton from './DestinationButton';
import locations from './data/locations.json';
import mapImage from './images/jhoto-kanto-map.png';

function App() {
  // Define the event handlers here
  const handleHover = (id) => {
    console.log(`Hovered over location with id ${id}`);
  };

  const handleLeave = () => {
    console.log(`Mouse left location`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <div style={{position: "relative"}}>
                <img src={mapImage} alt="Map of Jhoto and Kanto" style={{width: "100%"}} />
                {locations.map(location => (
                  <DestinationButton 
                    key={location.id} 
                    location={location} 
                    onHover={handleHover} 
                    onLeave={handleLeave} 
                  />
                ))}
              </div>
            </header>
          </div>
        } />

        {locations.map(location => (
          <Route path={`/location/${location.id}`} element={
            <div className="App">
              <header className="App-header">
                <h1>{location.name}</h1>
                <p>{location.description}</p>
                <Link to="/">Back to Map</Link>
              </header>
            </div>
          } />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
