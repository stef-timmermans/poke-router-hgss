import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Also import Link for navigation

const PokemonPage = ({ allPokemonData, allLocationsData }) => {
    const { pokemonId } = useParams(); // Get pokemonId from the URL

    const pokemon = allPokemonData.find(p => p.id === parseInt(pokemonId, 10));
    if (!pokemon) return <div>Pokemon not found</div>; // Early return if pokemon not found

    const getLocationNameById = (id) => {
        const location = allLocationsData?.find(loc => loc.id === id);
        return location?.name || 'Unknown Location';
    };

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <p>Type: {pokemon.types.join(', ')}</p>
            <div>
                Evolutions: 
                {pokemon.pokemon_line.evolutions.map(evoId => (
                    <span key={evoId}>{getLocationNameById(evoId)}, </span>
                ))}
            </div>
            <div>
                Previous Evolutions: 
                {pokemon.pokemon_line.pre_evolutions.map(preEvoId => (
                    <span key={preEvoId}>{getLocationNameById(preEvoId)}, </span>
                ))}
            </div>
            <p>Found in locations: {pokemon.found_in.map(id => getLocationNameById(id)).join(', ')}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default PokemonPage;
