import { render, screen } from '@testing-library/react';
import App from './App';
import { charMock } from './mocks/charMock'

// You might also need to import Moves and Types components and pass in dummy data to them 
import Moves from './components/Moves';
import Types from './components/Types';
import PokeCard from './components/PokeCard';


// NB: Delete this test eventually
test('renders something', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokewall/i);
  expect(linkElement).toBeInTheDocument();
});
