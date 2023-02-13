import logo from './Poke-logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

// URL to get the the first 10 generation 1 pokemon
const pokeCall = "https://pokeapi.co/api/v2/pokemon?limit=10";


function App() {
  // State
  const [pokemonList, setPokemonList] = useState([]);


  return (
    <>
      {/* NB: This is how you get the images from public folder */}
      {/* <img src='/Charmander.png' alt='charmander, the fire type starter from generation one' /> */}
      mic check
    </>
  );
}

export default App;