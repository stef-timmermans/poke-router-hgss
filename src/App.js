import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import DestinationButton from './elements/DestinationButton';
import LocationPage from './pages/LocationPage';
import PokemonPage from './pages/PokemonPage';
import locations from './data/locations.json';
import pokemon from './data/pokemon.json';
import mapImage from './images/jhoto-kanto-map.png';

function App() {
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
		  const urlDashedLocationName = location.name.replace(/\s+/g, '-'); 
		  return (
			<Route path={`/location/${urlDashedLocationName}`} element={
			  <LocationPage location={location} allPokemonData={pokemon} allLocationsData={locations} />
			} />
		  );
		})}

		<Route path={`/pokemon/:pokemonName`} element={
		  <PokemonPage allPokemonData={pokemon} allLocationsData={locations} />
		} />
		
	  </Routes>
	</Router>
  );
}

export default App;
