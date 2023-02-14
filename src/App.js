import logo from './Poke-logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard';


// URL to get the the first 10 pokemon from generation 1 
const pokeCallURL = "https://pokeapi.co/api/v2/pokemon?limit=10";


function App() {
  // The list of pokemon will be stored in React state
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isError, setIsError] = useState(false);

  async function getPokemon() {
    await fetch(pokeCallURL).then(res => {
      // Simple error handling if API response is not successful
      if (res.status !== 200) {
        setIsError(true);
      }
      return res.json()
    }).then((data) => {
      // use destructuring to grab pokemon 
      const { results } = data
      setPokemonList(results)
    });

  }
  // Make a call to get more details about a selected pokemon
  async function getPokemonInfo(relatedUrl) {
    await fetch(relatedUrl).then(res => {
      if (res.status !== 200) {
        setIsError(true)
      }
      return res.json()
    }).then(data => {
      setSelectedPokemon(data)
      console.log('selected:', selectedPokemon)
    })

  }

  useEffect(() => {
    getPokemon()
  }, [])

  console.log('List of pokemon in local state', pokemonList)
  return (
    <>
      {/* Header goes here */}
      <Container align="center" className="container-sm mt-4">
        <Row xs={1} md={3} className="g-4">
          {
            // if successful for Each starter, show the starter's name and image
            isError ? <p>Sorry, there was an error </p> : [pokemonList[0], pokemonList[3], pokemonList[6]].map((pokemon, i) => {
              return <PokeCard key={i} pokemon={pokemon} selectedPokemon={selectedPokemon} getPokemonInfo={getPokemonInfo} />
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default App;