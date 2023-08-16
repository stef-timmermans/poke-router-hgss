# PokeRouterHGSS

This repository holds the source code for PokeRouterHGSS, a web application for an interactive map of the Pokémon HeartGold and SoulSilver games. It is written in JavaScript using the React framework. This application is still very much a work in progress but the existing shell of the app exists in this release (pre-v0.1.0).

## Getting Started

First, ensure you have updated versions of Node.js and npm installed on your machine (as of this writing, npm v9.7.1 and node v18.16.0). Then, clone this repository to your local machine and run `npm install` to install all dependencies. Finally, run `npm start` to start the development server. The app should open in your default browser at `localhost:3000`.

## Features

The app currently has the following features:

- A map of the Johto region from Pokémon HeartGold and SoulSilver.
- Buttons for New Bark Town and Route 29 that, when clicked, will display the corresponding location data.
- Data for Chikorita's evolutionary line and its location (New Bark Town).

## Planned Features

The following features are planned for future releases (and eventually v1.0.0):

- Full support for all of the buttons on the map.
- Data for all Pokémon and their locations obtainable in the games (including evolutionary lines and event Pokémon).
- A button that displays all Pokémon of the region, with the ability to filter by type.
- Buttons for some obscure locations, such as the Sinjoh Ruins.
