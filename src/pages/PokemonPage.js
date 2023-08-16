/*
  Component: PokemonPage
  Description:
	The PokemonPage is a page loaded that displays
    all relevant information about a Pokémon and
    provides links to its evolutions and locations.
*/

import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PokemonPage = ({ allPokemonData, allLocationsData }) => {
    const { pokemonName } = useParams();
    const formattedPokemonName = pokemonName.replace(/-/g, ' ');

    const pokemon = allPokemonData.find(p => p.name.toLowerCase() === formattedPokemonName.toLowerCase());
    if (!pokemon) return <div>Pokemon not found</div>;

    const getLocationNameById = (id) => {
        const location = allLocationsData?.find(loc => loc.id === id);
        return location?.name || 'Unknown Location';
    };

    const getPokemonNameById = (id) => {
        const pokemon = allPokemonData?.find(p => p.id === id);
        return pokemon?.name || 'Unknown Pokemon';
    };

    const getUrlFriendlyPokemonName = (name) => name.replace(/\s+/g, '-');

    return (
        <div className="App">
            <header className="App-header">
                <h2>{pokemon.name}</h2>
                <p>Type: {pokemon.types.join(', ')}</p>
                <div>
                    Evolutions:
                    {pokemon.pokemon_line.evolutions.map(evoId => (
                        <span key={evoId}>
                            <Link to={`/pokemon/${getUrlFriendlyPokemonName(getPokemonNameById(evoId))}`}>
                                {getPokemonNameById(evoId)}
                            </Link>,
                        </span>
                    ))}
                </div>
                <div>
                    Previous Evolutions:
                    {pokemon.pokemon_line.pre_evolutions.map(preEvoId => (
                        <span key={preEvoId}>
                            <Link to={`/pokemon/${getUrlFriendlyPokemonName(getPokemonNameById(preEvoId))}`}>
                                {getPokemonNameById(preEvoId)}
                            </Link>,
                        </span>
                    ))}
                </div>
                <div>
                    Found in locations:
                    {pokemon.found_in.map(id => (
                        <span key={id}>
                            <Link to={`/location/${getLocationNameById(id).replace(/\s+/g, '-')}`}>
                                {getLocationNameById(id)}
                            </Link>,
                        </span>
                    ))}
                </div>
                <Link to="/">Back to Map</Link>
            </header>
        </div>
    );
};

export default PokemonPage;
