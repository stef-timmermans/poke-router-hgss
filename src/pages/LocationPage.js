/*
  Component: LocationPage
  Description:
	The LocationPage is a page loaded by the router
	when the user clicks on a location on the map. It
	displays all relevant information about the location
	and provides a link back to the map.
*/

import React from 'react';
import { Link } from 'react-router-dom';

const LocationPage = ({ location, allPokemonData }) => {

  // Get the Pokémon's name using its ID
  const getPokemonNameById = (id) => {
    const pokemon = allPokemonData.find(p => p.id === parseInt(id, 10));
    return pokemon ? pokemon.name : `Unknown Pokémon (ID: ${id})`;
  };

  // Convert Pokémon name to URL-friendly format
  const getUrlFriendlyPokemonName = (name) => name.replace(/\s+/g, '-');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{location.name}</h1>
        <p>{location.description}</p>

        <h2>Pokémon in this location on land:</h2>
        <ul>
          {location.pokemon.land.flat().map(pokemonId => (
            <li key={pokemonId}>
              <Link to={`/pokemon/${getUrlFriendlyPokemonName(getPokemonNameById(pokemonId))}`}>
                {getPokemonNameById(pokemonId)}
              </Link>
            </li>
          ))}
        </ul>

        <h2>Pokémon in this location in water:</h2>
        <ul>
          {location.pokemon.water.flat().map(pokemonId => (
            <li key={pokemonId}>
              <Link to={`/pokemon/${getUrlFriendlyPokemonName(getPokemonNameById(pokemonId))}`}>
                {getPokemonNameById(pokemonId)}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/">Back to Map</Link>
      </header>
    </div>
  );
};

export default LocationPage;
