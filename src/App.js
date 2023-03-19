import { useState, useEffect } from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard';
import Header from './components/Header';
import Footer from './components/Footer';

// URL to get that returns first 10 pokemon from generation 1
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
      const { results } = data
      setPokemonList(results)
    });

  }
  // This makes a seperate call to get more details about a selected pokemon
  async function getPokemonInfo(relatedUrl) {
    await fetch(relatedUrl).then(res => {
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
      <Header />
      <hr />
      <Container align="center" className="container-sm mt-4">
        <Row xs={1} md={3} className="g-4">
          {
            isError ? <p>Sorry, there was an error fetching pokemon. Please try again.</p> : [pokemonList[0], pokemonList[3], pokemonList[6]].map((pokemon, i) => {
              return <PokeCard key={i} pokemon={pokemon} selectedPokemon={selectedPokemon} getPokemonInfo={getPokemonInfo} />
            })
          }
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;