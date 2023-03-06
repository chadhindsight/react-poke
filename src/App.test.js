import { render, screen } from '@testing-library/react';
import App from './App';
import { charMock } from './mocks/charMock'

// You might also need to import Moves and Types components and pass in dummy data to them 
import Moves from './components/Moves';
import Types from './components/Types';
import PokeCard from './components/PokeCard';

// NB: Delete this test eventually
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokewall/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders pokemon card container', () => {
  // props needed are { selectedPokemon, getPokemonInfo, pokemon }
  const selectedPokemon = charMock.name
  // How do you mock an api call?
  const getPokemonInfo = () =>
    render(<PokeCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});