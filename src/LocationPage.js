import React from 'react';
import { Link } from 'react-router-dom';

const LocationPage = ({ location }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <Link to="/">Back to Map</Link>
      </header>
    </div>
  );
};

export default LocationPage;
