import SearchBar from './SearchBar';
import { useCocktails } from '../context/CocktailContext';

export default function Header() {
  const { cocktails } = useCocktails();
  return (
    <header>
      <h1><i className="fas fa-glass-martini-alt"></i> Explore Cocktails</h1>
      <SearchBar />
      <p id="result-count">
        {cocktails.length ? `${cocktails.length} cocktails found.` : 'Ready to search...'}
      </p>
    </header>
  );
}