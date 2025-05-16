import { useState, useEffect } from 'react';
import { useCocktails } from '../../context/CocktailContext';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useCocktails();
  const [input, setInput] = useState(searchTerm);

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setSearchTerm(trimmed);
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Enter cocktail name"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        {input && (
          <span className={styles.clearIcon} onClick={() => setInput('')}>
            <i className="fas fa-times"></i>
          </span>
        )}
      </div>
      <button
        onClick={handleSearch}
        className={styles.button}
        disabled={!input.trim()}
      >
        <i className="fas fa-search"></i> Search
      </button>
    </div>
  );
}
