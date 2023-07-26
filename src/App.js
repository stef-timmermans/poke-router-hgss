import React, { useState } from 'react';
import './App.css';
import DestinationButton from './DestinationButton';
import locations from './data/locations.json';
import mapImage from './images/jhoto-kanto-map.png';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleLocationSelect = (id) => {
    setSelectedLocation(locations.find(location => location.id === id));
  };

  const handleLocationHover = (id) => {
    setHoveredLocation(locations.find(location => location.id === id));
  };

  const handleLocationLeave = () => {
    setHoveredLocation(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={mapImage} alt="Map of Jhoto and Kanto" style={{position: 'relative'}} />
        {locations.map((location) => 
          <DestinationButton 
            key={location.id} 
            location={location}
            onHover={handleLocationHover}
            onLeave={handleLocationLeave}
            onSelect={handleLocationSelect}
          />
        )}
      </header>
    </div>
  );
}

export default App;
