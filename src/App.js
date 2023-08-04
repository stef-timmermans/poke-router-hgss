/*
  Component: App
  Description:
    The main component of the app. This component is responsible
    for rendering the map image and all buttons. 
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import DestinationButton from './elements/DestinationButton';
import LocationPage from './pages/LocationPage';
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

        {locations.map(location => {
          const urlDashedLocationName = location.name.replace(/\s+/g, '-'); // Replace spaces with hyphens

          return (
            // Route the user to the location page and load the page component when they click on a location
            <Route path={`/location/${urlDashedLocationName}`} element={
              <LocationPage location={location} />
            } />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
