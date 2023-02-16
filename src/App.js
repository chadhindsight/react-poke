import logo from './Poke-logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard';


// URL to get the the first 10 pokemon from generation 1 
const pokeCallURL = "https://pokeapi.co/api/v2/pokemon?limit=10";


function App() {
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
      // use destructuring to get pokemon 
      const { results } = data
      setPokemonList(results)
    });

  }
  // This makes a seperate call to get more details about a selected pokemon
  async function getPokemonInfo(relatedUrl) {
    await fetch(relatedUrl).then(res => {
      // Simple error handling if API response is not successful
      if (res.status !== 200) {
        setIsError(true)
      }
      return res.json()
    }).then(data => {
      setSelectedPokemon(data)
    })

  }

  useEffect(() => {
    getPokemon()
  }, [])

  console.log('List of pokemon in local state', pokemonList)
  return (
    <>
      {/* Header component will go here */}
      <Container align="center" className="container-sm mt-4">
        <Row xs={1} md={3} className="g-4">
          {
            // if successful for each starter, show the starter's name and image
            isError ? <p>Sorry, there was an error fetching pokemon</p> : [pokemonList[0], pokemonList[3], pokemonList[6]].map((pokemon, i) => {
              return <PokeCard key={i} pokemon={pokemon} selectedPokemon={selectedPokemon} getPokemonInfo={getPokemonInfo} />
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default App;