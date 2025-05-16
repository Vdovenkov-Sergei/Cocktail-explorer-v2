import { useState, useEffect } from 'react';
import { useCocktails } from '../context/CocktailContext';

export default function SearchBar() {
  const { searchTerm, setSearchTerm, fetchCocktails } = useCocktails();
  const [input, setInput] = useState(searchTerm);

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    const trimmed = input.trim();
    if (trimmed) fetchCocktails(trimmed);
  };

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter cocktail name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        {input && <span id="clear-icon" onClick={() => setInput('')}><i className="fas fa-times"></i></span>}
      </div>
      <button onClick={handleSearch} disabled={!input.trim()}><i className="fas fa-search"></i> Search</button>
    </div>
  );
}