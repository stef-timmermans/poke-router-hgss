import React from 'react';
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

  const handleSelect = (id) => {
    console.log(`Selected location with id ${id}`);
  };

  return (
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
              onSelect={handleSelect} 
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
